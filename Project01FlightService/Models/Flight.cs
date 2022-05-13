namespace Project01FlightServiceFAW.Models
{
    public class Flight : IDateCreatedAndUpdated
    {
        public int Id { get; set; }
        public int FlightNumber { get; set; }
        public DateTime? Departure { get; set; }
        public DateTime? Arrival { get; set; }
        public Location? Origin { get; set; }
        public Location? Destination { get; set; }

        public int Capacity { get; set; } = 0;
        public DateTime DateCreated { get; set; } = DateTime.Now;
        public DateTime? DateUpdated { get; set; } = new DateTime();
    }
}
