using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Project01FlightServiceFAW.Data;
using Project01FlightServiceFAW.Models;
using System.Web.Http;

namespace Project01FlightServiceFAW.Controllers
{
    [Microsoft.AspNetCore.Mvc.Route("api/[controller]")]
    [ApiController]
    public class LocationsController : ControllerBase
    {
        private readonly FSContext _context;

        public LocationsController(FSContext context)
        {
            _context = context;
        }

        // GET: api/Locations
        [Microsoft.AspNetCore.Mvc.HttpGet]
        public async Task<ActionResult<IEnumerable<Location>>> GetLocations()
        {
            return await _context.Locations.ToListAsync();
        }

        // GET: api/Locations/5
        [Microsoft.AspNetCore.Mvc.HttpGet("{id}")]
        public async Task<ActionResult<Location>> GetLocation([System.Web.Http.FromUri] int id)
        {
            var location = await _context.Locations.FindAsync(id);

            if (location == null)
            {
                return NotFound();
            }

            return location;
        }

        // PUT: api/Locations/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [Microsoft.AspNetCore.Mvc.HttpPost("{id}")]
        public async Task<IActionResult> PostLocationUpdate([Microsoft.AspNetCore.Mvc.FromBody] Location location)
        {
            using (var dbContextTransaction = _context.Database.BeginTransaction())
            {
                _context.Database.ExecuteSqlInterpolated($"UPDATE Locations SET AirportName = {location.AirportName}, AirportCode = {location.AirportCode} WHERE Id = {location.Id};");

                await _context.SaveChangesAsync(CancellationToken.None);
                dbContextTransaction.Commit();
            }

            return NoContent(); 
        }

        // POST: api/Locations
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [Microsoft.AspNetCore.Mvc.HttpPost]
        public async Task<ActionResult<Location>> PostLocation([Microsoft.AspNetCore.Mvc.FromBody] Location location)
        {
            Location newLocation = location;
            _context.Locations.Add(newLocation);
            await _context.SaveChangesAsync(CancellationToken.None);

            return CreatedAtAction("GetLocation", new { id = location.Id }, location);
        }

        // DELETE: api/Locations/5
        [Microsoft.AspNetCore.Mvc.HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLocation([System.Web.Http.FromUri] int id)
        {
            var location = await _context.Locations.FindAsync(id);
            if (location == null)
            {
                return NotFound();
            }

            _context.Locations.Remove(location);
            await _context.SaveChangesAsync(CancellationToken.None);

            return NoContent();
        }

        private bool LocationExists(int id)
        {
            return _context.Locations.Any(e => e.Id == id);
        }
    }
}
