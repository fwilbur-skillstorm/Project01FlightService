using System.ComponentModel.DataAnnotations.Schema;

namespace Project01FlightServiceFAW.Models
{
    public class Itinerary : IDateCreatedAndUpdated
    {
        public int Id { get; set; }
        public string Confirmation { get; set; } = string.Empty;
        public Flight? Flight { get; set; } = null!;
        [NotMapped]
        public string? OriginCode => Flight?.OriginCode;
        [NotMapped]
        public string? DestinationCode => Flight?.DestinationCode;
        public Passenger? Passenger { get; set; } = null!;
        [NotMapped]
        public string? PassengerFirstName => Passenger?.FirstName;
        [NotMapped]
        public string? PassengerLastName => Passenger?.LastName;
        [NotMapped]
        public int? FlightNumber => Flight?.Id;
        [NotMapped]
        public DateTime? Departure => Flight?.Departure;
        public DateTime DateCreated { get; set; } = DateTime.Now;
        public DateTime? DateUpdated { get; set; } = new DateTime();
    }
}
