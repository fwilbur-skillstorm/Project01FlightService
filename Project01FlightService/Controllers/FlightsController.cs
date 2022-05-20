using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Project01FlightServiceFAW.Data;
using Project01FlightServiceFAW.Models;

namespace Project01FlightServiceFAW.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FlightsController : ControllerBase
    {
        private readonly FSContext _context;

        public FlightsController(FSContext context)
        {
            _context = context;
        }

        // GET: api/Flights
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Flight>>> GetFlights()
        {
            return await _context.Flights
                                 .Include(f => f.Origin)
                                 .Include(f => f.Destination)
                                 .ToListAsync();
        }

        // GET: api/Flights/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Flight>> GetFlight([System.Web.Http.FromUri] int id)
        {
            var flight = await _context.Flights
                                        .Include(f => f.Origin)
                                        .Include(f => f.Destination)
                                        .Where(f => f.Id == id)
                                        .FirstAsync();                      

            if (flight == null)
            {
                return NotFound();
            }

            return flight;
        }

        // PUT: api/Flights/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("{id}")]
        public async Task<IActionResult> PostFlightUpdate([FromBody] Flight flight)
        {
            using (var dbContextTransaction = _context.Database.BeginTransaction())
            {
                _context.Database.ExecuteSqlInterpolated($"UPDATE Flights SET Departure = {flight.Departure}, Origin = {flight.Origin}, Arrival = {flight.Arrival}, Destination = {flight.Destination}, Capacity = {flight.Capacity} WHERE Id = {flight.Id};");

                await _context.SaveChangesAsync(CancellationToken.None);
                dbContextTransaction.Commit();
            }

            return NoContent();
        }

        // POST: api/Flights
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Flight>> PostFlight([FromBody] Flight flight)
        {
            using (var dbContextTransaction = _context.Database.BeginTransaction())
            {
                _context.Database.ExecuteSqlInterpolated($"INSERT INTO Flights (Departure, Arrival, OriginId, DestinationId, Capacity, DateCreated, DateUpdated) VALUES ({flight.Departure}, {flight.Arrival}, {flight.Origin.Id}, {flight.Destination.Id}, {flight.Capacity}, {DateTime.Now.ToString()}, {DateTime.Now.ToString()});");

                await _context.SaveChangesAsync(CancellationToken.None);
                dbContextTransaction.Commit();
            }

            return CreatedAtAction("GetFlight", new { id = flight.Id }, flight);
        }

        // DELETE: api/Flights/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFlight([System.Web.Http.FromUri] int id)
        {
            var flight = await _context.Flights.FindAsync(id);
            if (flight == null)
            {
                return NotFound();
            }

            _context.Flights.Remove(flight);
            await _context.SaveChangesAsync(CancellationToken.None);

            return NoContent();
        }

        private bool FlightExists(int id)
        {
            return _context.Flights.Any(e => e.Id == id);
        }
    }
}
