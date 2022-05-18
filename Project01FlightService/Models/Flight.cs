using System.ComponentModel.DataAnnotations.Schema;

namespace Project01FlightServiceFAW.Models
{
    public class Flight : IDateCreatedAndUpdated
    {
        public int Id { get; set; }
        public DateTime? Departure { get; set; }
        public DateTime? Arrival { get; set; }
        public Location? Origin { get; set; }
        [NotMapped]
        public string? OriginCode => Origin?.AirportCode;
        public Location? Destination { get; set; }
        [NotMapped]
        public string? DestinationCode => Destination?.AirportCode;
        public int Capacity { get; set; } = 4;
        public DateTime DateCreated { get; set; } = DateTime.Now;
        public DateTime? DateUpdated { get; set; } = new DateTime();
    }
}
