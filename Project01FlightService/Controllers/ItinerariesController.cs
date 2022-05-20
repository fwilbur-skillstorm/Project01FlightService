using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Project01FlightServiceFAW.Data;
using Project01FlightServiceFAW.Models;

namespace Project01FlightServiceFAW.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItinerariesController : ControllerBase
    {
        private readonly FSContext _context;

        public ItinerariesController(FSContext context)
        {
            _context = context;
        }

        // GET: api/Itineraries
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Itinerary>>> GetItineraries()
        {
            return await _context.Itineraries
                                 .Include(i => i.Flight)
                                     .ThenInclude(f => f.Origin)
                                 .Include(i => i.Flight)
                                    .ThenInclude(f => f.Destination)
                                 .Include(i => i.Passenger)
                                 .ToListAsync();
        }

        // GET: api/Itineraries/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Itinerary>> GetItinerary([System.Web.Http.FromUri] int id)
        {
            var itinerary = await _context.Itineraries.FindAsync(id);

            if (itinerary == null)
            {
                return NotFound();
            }

            return itinerary;
        }

        // PUT: api/Itineraries/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PostItineraryUpdate([FromBody] Itinerary itinerary)
        {
            using (var dbContextTransaction = _context.Database.BeginTransaction())
            {
                if (itinerary.Flight != null && itinerary.Passenger != null)
                {
                    _context.Database.ExecuteSqlInterpolated($"UPDATE Itineraries SET Confirmation = {itinerary.Confirmation}, FlightId = {itinerary.Flight.Id}, PassengerId = {itinerary.Passenger.Id} WHERE Id = {itinerary.Id};");

                    await _context.SaveChangesAsync(CancellationToken.None);
                    dbContextTransaction.Commit();
                }
            }

            return NoContent();
        }

        // POST: api/Itineraries
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Itinerary>> PostItinerary([FromBody] Itinerary itinerary)
        {


            using (var dbContextTransaction = _context.Database.BeginTransaction())
            {
                
                if (itinerary.Flight != null && itinerary.Passenger != null)
                {
                    int currentSeats = _context.Database.ExecuteSqlInterpolated($"SELECT COUNT(Itineraries.Id) AS SeatsTaken FROM Itineraries INNER JOIN Flights ON Itineraries.FlightId = Flights.Id WHERE Itineraries.FlightId = {itinerary.Flight.Id} GROUP BY Itineraries.FlightId;");
                    if (currentSeats < itinerary.Flight.Capacity)
                    {
                        _context.Database.ExecuteSqlInterpolated($"INSERT INTO Itineraries (Confirmation, FlightId, PassengerId, DateCreated, DateUpdated) VALUES ({itinerary.Confirmation}, {itinerary.Flight.Id}, {itinerary.Passenger.Id}, {DateTime.Now.ToString()}, {DateTime.Now.ToString()});");
                    }
                }

                await _context.SaveChangesAsync(CancellationToken.None);
                dbContextTransaction.Commit();
            }

            return CreatedAtAction("GetItinerary", new { id = itinerary.Id }, itinerary);
        }

        // DELETE: api/Itineraries/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteItinerary([System.Web.Http.FromUri] int id)
        {
            var itinerary = await _context.Itineraries.FindAsync(id);
            if (itinerary == null)
            {
                return NotFound();
            }

            _context.Itineraries.Remove(itinerary);
            await _context.SaveChangesAsync(CancellationToken.None);

            return NoContent();
        }

        private bool ItineraryExists(int id)
        {
            return _context.Itineraries.Any(e => e.Id == id);
        }
    }
}
