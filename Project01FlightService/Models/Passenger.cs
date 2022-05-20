using System.ComponentModel.DataAnnotations.Schema;

namespace Project01FlightServiceFAW.Models
{
    public class Passenger : IDateCreatedAndUpdated
    {
        public int Id { get; set; }
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public DateTime DOB { get; set; } = new DateTime();
        public string? Job { get; set; }
        public DateTime DateCreated { get; set; } = DateTime.Now;
        public DateTime? DateUpdated { get; set; } = new DateTime();
        [NotMapped]
        public int Age => (int)Math.Floor(DateTime.Now.Subtract(DOB).Days / 365.25);
        [NotMapped]
        public string Label => FirstName + " " + LastName;
        [NotMapped]
        public int Value => Id;
    }
}
