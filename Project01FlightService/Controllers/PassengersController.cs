﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Project01FlightServiceFAW.Data;
using Project01FlightServiceFAW.Models;

namespace Project01FlightServiceFAW.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PassengersController : ControllerBase
    {
        private readonly FSContext _context;

        public PassengersController(FSContext context)
        {
            _context = context;
        }

        // GET: api/Passengers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Passenger>>> GetPassengers()
        {
            return await _context.Passengers.ToListAsync();
        }

        // GET: api/Passengers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Passenger>> GetPassenger(int id)
        {
            var passenger = await _context.Passengers.FindAsync(id);

            if (passenger == null)
            {
                return NotFound();
            }

            return passenger;
        }

        // PUT: api/Passengers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPassenger(int id, Passenger passenger)
        {
            if (id != passenger.Id)
            {
                return BadRequest();
            }

            _context.Entry(passenger).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync(CancellationToken.None);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PassengerExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Passengers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Passenger>> PostPassenger(Passenger passenger)
        {
            _context.Passengers.Add(passenger);
            await _context.SaveChangesAsync(CancellationToken.None);

            return CreatedAtAction("GetPassenger", new { id = passenger.Id }, passenger);
        }

        // DELETE: api/Passengers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePassenger(int id)
        {
            var passenger = await _context.Passengers.FindAsync(id);
            if (passenger == null)
            {
                return NotFound();
            }

            _context.Passengers.Remove(passenger);
            await _context.SaveChangesAsync(CancellationToken.None);

            return NoContent();
        }

        private bool PassengerExists(int id)
        {
            return _context.Passengers.Any(e => e.Id == id);
        }
    }
}
