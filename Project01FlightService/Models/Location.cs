using System.ComponentModel.DataAnnotations.Schema;

namespace Project01FlightServiceFAW.Models
{
    public class Location : IDateCreatedAndUpdated
    {
        public int Id { get; set; }
        public string AirportCode { get; set; } = string.Empty;
        public string AirportName { get; set; } = string.Empty;
        public DateTime DateCreated { get; set; } = DateTime.Now;
        public DateTime? DateUpdated { get; set; } = new DateTime();
        [NotMapped]
        public int Value => Id;
        [NotMapped]
        public string Label => AirportCode + " — " + AirportName;
    }
}
