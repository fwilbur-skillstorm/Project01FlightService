using Microsoft.EntityFrameworkCore;
using Project01FlightServiceFAW.Models;

namespace Project01FlightServiceFAW.Data
{
    public class FSContext : DbContext
    {
		public DbSet<Flight> Flights { get; set; }
		public DbSet<Location> Locations { get; set; }
		public DbSet<Passenger> Passengers { get; set; }
		public DbSet<Itinerary> Itineraries { get; set; }

		public FSContext()
		{

		}

		public FSContext(DbContextOptions<FSContext> options) : base(options)
		{

		}

		// shamelessly lifted from here: https://www.johnaclee.com/blog/automatic-created-and-updated-dates-with-entity-framework
		public override int SaveChanges()
		{
			SetProperties();
			return base.SaveChanges();
		}

		//would override, but runs into errors; method that follows this one is necessary
        //public override Task<int> SaveChangesAsync()
        //{
        //    SetProperties();
        //    return base.SaveChangesAsync();
        //}

        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken)
		{
			SetProperties();
			return base.SaveChangesAsync(cancellationToken);
		}

		/// <summary>
		/// In brief: this method updates DateCreated when a model object is created and 
		/// updates DateUpdated whenever a model object is modified. The whole point of this
		/// is to now have to use triggers within the database.
		/// </summary>
		private void SetProperties()
		{
			foreach (var entity in ChangeTracker.Entries().Where(p => p.State == EntityState.Added))
			{
				var created = entity.Entity as IDateCreated;
				if (created != null)
				{
					created.DateCreated = DateTime.Now;
				}
			}

			foreach (var entity in ChangeTracker.Entries().Where(p => p.State == EntityState.Modified))
			{
				var updated = entity.Entity as IDateUpdated;
				if (updated != null)
				{
					updated.DateUpdated = DateTime.Now;
				}
			}
		}
	}
}
