namespace Project01FlightServiceFAW.Models
{
    public class Itinerary : IDateCreatedAndUpdated
    {
        public int Id { get; set; }
        public string Confirmation { get; set; } = string.Empty;
        public Flight? Flight { get; set; } = null!;
        public Passenger? Passenger { get; set; } = null!;
        public DateTime DateCreated { get; set; } = DateTime.Now;
        public DateTime? DateUpdated { get; set; } = new DateTime();
    }
}
