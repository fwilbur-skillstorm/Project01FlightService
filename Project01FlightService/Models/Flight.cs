using System.ComponentModel.DataAnnotations.Schema;

namespace Project01FlightServiceFAW.Models
{
    public class Flight : IDateCreatedAndUpdated
    {
        public int Id { get; set; }
        public string? Departure { get; set; } = new DateTime().ToString();
        public string? Arrival { get; set; } = new DateTime().ToString();
        public Location? Origin { get; set; }
        public Location? Destination { get; set; }
        public int Capacity { get; set; } = 4;
        public DateTime DateCreated { get; set; } = DateTime.Now;
        public DateTime? DateUpdated { get; set; } = new DateTime();
        [NotMapped]
        public int Value => Id;
        [NotMapped]
        public string Label => Origin?.AirportCode + " -> " + Destination?.AirportCode;
    }
}
