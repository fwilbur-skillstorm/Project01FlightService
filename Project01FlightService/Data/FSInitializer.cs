using Microsoft.EntityFrameworkCore;
using Project01FlightServiceFAW.Models;

namespace Project01FlightServiceFAW.Data
{
    public class FSInitializer
    {
        // sourced from here: https://stackoverflow.com/questions/194863/random-date-in-c-sharp
        private static DateTime GenerateRandomDateTime()
        {
            Random random = new Random();
            DateTime earliest = new DateTime(1930, 1, 1);
            int range = (DateTime.Today - earliest).Days;
            return earliest.AddDays(random.Next(range));
        }

		public static void Initialize(IServiceProvider serviceProvider)
		{
			using (var context = new FSContext(serviceProvider.GetRequiredService<DbContextOptions<FSContext>>()))
			{
				context.Database.EnsureCreated();

				Location[] locations = new Location[]
				{
					new Location{AirportCode="AGA", AirportName="Agadir, Morocco"},
					new Location{AirportCode="AHU", AirportName="Al Hoceima, Morocco"},
					new Location{AirportCode="CAS", AirportName="Casablanca, Morocco"},
					new Location{AirportCode="CMN", AirportName="Casablanca (Mohamed V), Morocco"},
					new Location{AirportCode="FEZ", AirportName="Fes, Morocco"},
					new Location{AirportCode="RAK", AirportName="Marrakech - Menara, Morocco"},
					new Location{AirportCode="OZZ", AirportName="Ouarzazate, Morocco"},
					new Location{AirportCode="OUD", AirportName="Oujda, Morocco"},
					new Location{AirportCode="RBA", AirportName="Rabat - Sale, Morocco"},
					new Location{AirportCode="TNG", AirportName="Tanger - Boukhalef, Morocco"},
				};

				if (!context.Locations.Any())
				{
                    context.Locations.AddRange(locations);
					context.SaveChanges();
				}

				Passenger[] passengers = new Passenger[]
				{
					new Passenger
					{
						FirstName="Brenda",
						LastName="Hickman",
						Email="posuere.enim@icloud.ca",
						DOB=GenerateRandomDateTime(),
						Job="Lawyer"
					},
					new Passenger
					{
						FirstName="Meghan",
						LastName="Parker",
						Email="ipsum.suspendisse@outlook.ca",
						DOB=GenerateRandomDateTime(),
						Job="Database Administrator"
					},
					new Passenger
					{
						FirstName="Jacob",
						LastName="Shannon",
						Email="interdum@icloud.couk",
						DOB=GenerateRandomDateTime(),
						Job="Politician"
					},
					new Passenger
					{
						FirstName="Kevyn",
						LastName="Maynard",
						Email="gravida.sit@aol.com",
						DOB=GenerateRandomDateTime()
					},
					new Passenger
					{
						FirstName="Forrest",
						LastName="Hines",
						Email="eu@hotmail.couk",
						DOB=GenerateRandomDateTime()
					},
					new Passenger
					{
						FirstName="Leigh",
						LastName="Olsen",
						Email="bibendum.donec.felis@outlook.net",
						DOB=GenerateRandomDateTime(),
						Job="Lawyer"
					},
					new Passenger
					{
						FirstName="Ava",
						LastName="French",
						Email="sollicitudin@icloud.net",
						DOB=GenerateRandomDateTime(),
						Job="Politician"
					},
					new Passenger
					{
						FirstName="Amir",
						LastName="Webster",
						Email="vitae@protonmail.edu",
						DOB=GenerateRandomDateTime(),
						Job="Software Engineer"
					},
					new Passenger
					{
						FirstName="Sophia",
						LastName="Merritt",
						Email="mauris@outlook.net",
						DOB=GenerateRandomDateTime(),
						Job="Software Engineer"
					},
					new Passenger
					{
						FirstName="Dolan",
						LastName="Hansen",
						Email="ligula.nullam@icloud.org",
						DOB=GenerateRandomDateTime(),
						Job="Software Engineer"
					},
					new Passenger
					{
						FirstName="Shea",
						LastName="Morin",
						Email="et.libero.proin@icloud.org",
						DOB=GenerateRandomDateTime()
					},
					new Passenger
					{
						FirstName="Yvette",
						LastName="Harrell",
						Email="aenean@aol.com",
						DOB=GenerateRandomDateTime(),
						Job="Lawyer"
					},
					new Passenger
					{
						FirstName="Charde",
						LastName="Blankenship",
						Email="aenean.egestas@yahoo.org",
						DOB=GenerateRandomDateTime(),
						Job="Software Engineer"
					},
					new Passenger
					{
						FirstName="Graiden",
						LastName="Crane",
						Email="interdum.ligula@yahoo.com",
						DOB=GenerateRandomDateTime()
					},
					new Passenger
					{
						FirstName="Lillith",
						LastName="Edwards",
						Email="a@hotmail.ca",
						DOB=GenerateRandomDateTime(),
						Job="Project Manager"
					},
					new Passenger
					{
						FirstName="Roth",
						LastName="Mcclure",
						Email="hendrerit.consectetuer@outlook.com",
						DOB=GenerateRandomDateTime()
					},
					new Passenger
					{
						FirstName="Suki",
						LastName="Moody",
						Email="blandit.viverra@google.org",
						DOB=GenerateRandomDateTime()
					},
					new Passenger
					{
						FirstName="Trevor",
						LastName="Espinoza",
						Email="imperdiet.non@icloud.ca",
						DOB=GenerateRandomDateTime(),
						Job="Lawyer"
					},
					new Passenger
					{
						FirstName="Dana",
						LastName="Merrill",
						Email="amet.ultricies@protonmail.ca",
						DOB=GenerateRandomDateTime(),
						Job="Lawyer"
					},
					new Passenger
					{
						FirstName="Aristotle",
						LastName="Ochoa",
						Email="lorem.ipsum@yahoo.ca",
						DOB=GenerateRandomDateTime()
					},
					new Passenger
					{
						FirstName="Noble",
						LastName="Knox",
						Email="proin.vel.nisl@icloud.couk",
						DOB=GenerateRandomDateTime()
					},
					new Passenger
					{
						FirstName="Trevor",
						LastName="Myers",
						Email="ut.nisi@hotmail.couk",
						DOB=GenerateRandomDateTime()
					},
					new Passenger
					{
						FirstName="Hollee",
						LastName="Velasquez",
						Email="parturient@icloud.net",
						DOB=GenerateRandomDateTime(),
						Job="Project Manager"
					},
					new Passenger
					{
						FirstName="Brian",
						LastName="Workman",
						Email="velit.dui@protonmail.couk",
						DOB=GenerateRandomDateTime(),
						Job="Project Manager"
					},
					new Passenger
					{
						FirstName="Lenore",
						LastName="Medina",
						Email="adipiscing.fringilla.porttitor@aol.net",
						DOB=GenerateRandomDateTime()
					},
					new Passenger
					{
						FirstName="Alexandra",
						LastName="French",
						Email="aliquam.enim.nec@yahoo.net",
						DOB=GenerateRandomDateTime(),
						Job="Politician"
					},
					new Passenger
					{
						FirstName="Galena",
						LastName="House",
						Email="dui@google.com",
						DOB=GenerateRandomDateTime(),
						Job="Lawyer"
					},
					new Passenger
					{
						FirstName="Orla",
						LastName="Morton",
						Email="et@aol.com",
						DOB=GenerateRandomDateTime(),
						Job="Politician"
					},
					new Passenger
					{
						FirstName="Timon",
						LastName="Tanner",
						Email="sollicitudin.a@protonmail.ca",
						DOB=GenerateRandomDateTime(),
						Job="Politician"
					},
					new Passenger
					{
						FirstName="Maxwell",
						LastName="Aguirre",
						Email="etiam.gravida@yahoo.com",
						DOB=GenerateRandomDateTime(),
						Job="Project Manager"
					},
					new Passenger
					{
						FirstName="Idola",
						LastName="Camacho",
						Email="amet.nulla.donec@hotmail.com",
						DOB=GenerateRandomDateTime(),
						Job="Project Manager"
					},
					new Passenger
					{
						FirstName="Brody",
						LastName="Marquez",
						Email="nullam@protonmail.com",
						DOB=GenerateRandomDateTime()
					},
					new Passenger
					{
						FirstName="Keith",
						LastName="Duran",
						Email="ullamcorper.velit.in@hotmail.org",
						DOB=GenerateRandomDateTime()
					},
					new Passenger
					{
						FirstName="Cadman",
						LastName="Sparks",
						Email="fusce.aliquet@protonmail.com",
						DOB=GenerateRandomDateTime()
					},
					new Passenger
					{
						FirstName="Travis",
						LastName="Eaton",
						Email="neque.nullam@yahoo.net",
						DOB=GenerateRandomDateTime()
					},
					new Passenger
					{
						FirstName="Cathleen",
						LastName="Schultz",
						Email="iaculis@google.ca",
						DOB=GenerateRandomDateTime()
					},
					new Passenger
					{
						FirstName="Adena",
						LastName="Joseph",
						Email="blandit@google.couk",
						DOB=GenerateRandomDateTime(),
						Job="Lawyer"
					},
					new Passenger
					{
						FirstName="Brian",
						LastName="Livingston",
						Email="dolor.nulla@aol.edu",
						DOB=GenerateRandomDateTime()
					},
					new Passenger
					{
						FirstName="Olivia",
						LastName="Clayton",
						Email="arcu@hotmail.net",
						DOB=GenerateRandomDateTime(),
						Job="Lawyer"
					},
					new Passenger
					{
						FirstName="Aphrodite",
						LastName="Garrett",
						Email="aenean.sed@hotmail.com",
						DOB=GenerateRandomDateTime(),
						Job="Project Manager"
					},
					new Passenger
					{
						FirstName="August",
						LastName="Higgins",
						Email="et.malesuada@icloud.net",
						DOB=GenerateRandomDateTime()
					},
					new Passenger
					{
						FirstName="Brittany",
						LastName="Burt",
						Email="elit.pharetra@yahoo.couk",
						DOB=GenerateRandomDateTime()
					},
					new Passenger
					{
						FirstName="Aurora",
						LastName="Delacruz",
						Email="nec.mollis.vitae@yahoo.ca",
						DOB=GenerateRandomDateTime()
					},
					new Passenger
					{
						FirstName="Kylie",
						LastName="Curtis",
						Email="mattis.ornare@protonmail.ca",
						DOB=GenerateRandomDateTime(),
						Job="Lawyer"
					},
					new Passenger
					{
						FirstName="Orli",
						LastName="Justice",
						Email="nulla@yahoo.org",
						DOB=GenerateRandomDateTime(),
						Job="Project Manager"
					},
					new Passenger
					{
						FirstName="MacKensie",
						LastName="Kerr",
						Email="vestibulum.mauris.magna@protonmail.com",
						DOB=GenerateRandomDateTime(),
						Job="Politician"
					},
					new Passenger
					{
						FirstName="Alice",
						LastName="Rollins",
						Email="tellus.justo@icloud.org",
						DOB=GenerateRandomDateTime()
					},
					new Passenger
					{
						FirstName="Lareina",
						LastName="Mccoy",
						Email="vitae.aliquet.nec@hotmail.couk",
						DOB=GenerateRandomDateTime()
					},
					new Passenger
					{
						FirstName="Tara",
						LastName="Santos",
						Email="lorem.eu@aol.couk",
						DOB=GenerateRandomDateTime(),
						Job="Project Manager"
					},
					new Passenger
					{
						FirstName="Madonna",
						LastName="Booker",
						Email="enim@icloud.org",
						DOB=GenerateRandomDateTime(),
						Job="Pilot"
					},
					new Passenger
					{
						FirstName="Brielle",
						LastName="Gonzales",
						Email="adipiscing.lobortis@icloud.net",
						DOB=GenerateRandomDateTime(),
						Job="Lawyer"
					},
					new Passenger
					{
						FirstName="Garrett",
						LastName="Benjamin",
						Email="iaculis.lacus@icloud.ca",
						DOB=GenerateRandomDateTime(),
						Job="CEO"
					},
					new Passenger
					{
						FirstName="Armando",
						LastName="Olsen",
						Email="eu.lacus@hotmail.ca",
						DOB=GenerateRandomDateTime(),
						Job="Lawyer"
					},
					new Passenger
					{
						FirstName="Kamal",
						LastName="Beasley",
						Email="et.netus@icloud.org",
						DOB=GenerateRandomDateTime(),
						Job="Chef"
					},
					new Passenger
					{
						FirstName="Clark",
						LastName="Pruitt",
						Email="lacinia@hotmail.org",
						DOB=GenerateRandomDateTime()
					},
					new Passenger
					{
						FirstName="Kylie",
						LastName="Morgan",
						Email="fringilla.est.mauris@hotmail.com",
						DOB=GenerateRandomDateTime()
					},
					new Passenger
					{
						FirstName="Elijah",
						LastName="Henderson",
						Email="cras.vehicula.aliquet@icloud.couk",
						DOB=GenerateRandomDateTime(),
						Job="Lawyer"
					},
					new Passenger
					{
						FirstName="Gary",
						LastName="Foreman",
						Email="quis.pede@protonmail.net",
						DOB=GenerateRandomDateTime(),
						Job="Chef"
					},
					new Passenger
					{
						FirstName="Armand",
						LastName="Cantrell",
						Email="montes.nascetur@yahoo.ca",
						DOB=GenerateRandomDateTime(),
						Job="Database Administrator"
					},
					new Passenger
					{
						FirstName="Phyllis",
						LastName="Harper",
						Email="montes.nascetur@outlook.org",
						DOB=GenerateRandomDateTime()
					},
					new Passenger
					{
						FirstName="Hillary",
						LastName="Chase",
						Email="ut.tincidunt@yahoo.net",
						DOB=GenerateRandomDateTime()
					},
					new Passenger
					{
						FirstName="Sacha",
						LastName="Howard",
						Email="in@yahoo.net",
						DOB=GenerateRandomDateTime(),
						Job="Lawyer"
					},
					new Passenger
					{
						FirstName="Jack",
						LastName="Stephens",
						Email="blandit@yahoo.couk",
						DOB=GenerateRandomDateTime(),
						Job="Lawyer"
					},
					new Passenger
					{
						FirstName="Todd",
						LastName="Cline",
						Email="donec.at@hotmail.com",
						DOB=GenerateRandomDateTime(),
						Job="Database Administrator"
					},
					new Passenger
					{
						FirstName="Nathan",
						LastName="Gray",
						Email="non@icloud.ca",
						DOB=GenerateRandomDateTime()
					},
					new Passenger
					{
						FirstName="Martina",
						LastName="Hahn",
						Email="aliquam@yahoo.net",
						DOB=GenerateRandomDateTime()
					},
					new Passenger
					{
						FirstName="Debra",
						LastName="Wilcox",
						Email="tempor@google.org",
						DOB=GenerateRandomDateTime()
					},
					new Passenger
					{
						FirstName="Irma",
						LastName="Boone",
						Email="praesent@aol.couk",
						DOB=GenerateRandomDateTime(),
						Job="Lawyer"
					},
					new Passenger
					{
						FirstName="Ezra",
						LastName="Fowler",
						Email="molestie.arcu@yahoo.net",
						DOB=GenerateRandomDateTime(),
						Job="Politician"
					},
					new Passenger
					{
						FirstName="Paloma",
						LastName="Blake",
						Email="quam@icloud.net",
						DOB=GenerateRandomDateTime(),
						Job="Lawyer"
					},
					new Passenger
					{
						FirstName="Hakeem",
						LastName="Watson",
						Email="nisi@hotmail.org",
						DOB=GenerateRandomDateTime()
					},
					new Passenger
					{
						FirstName="Dolan",
						LastName="Middleton",
						Email="velit@hotmail.org",
						DOB=GenerateRandomDateTime(),
						Job="Lawyer"
					},
					new Passenger
					{
						FirstName="Reed",
						LastName="Bradford",
						Email="eros.proin@outlook.com",
						DOB=GenerateRandomDateTime(),
						Job="Chef"
					},
					new Passenger
					{
						FirstName="Regan",
						LastName="Finch",
						Email="nulla.at.sem@aol.org",
						DOB=GenerateRandomDateTime(),
						Job="Chef"
					},
					new Passenger
					{
						FirstName="Yen",
						LastName="Hooper",
						Email="nunc.ullamcorper@google.org",
						DOB=GenerateRandomDateTime()
					},
					new Passenger
					{
						FirstName="Adria",
						LastName="Christian",
						Email="dolor.elit.pellentesque@yahoo.edu",
						DOB=GenerateRandomDateTime()
					},
					new Passenger
					{
						FirstName="Pandora",
						LastName="Bryan",
						Email="et.ultrices.posuere@outlook.couk",
						DOB=GenerateRandomDateTime(),
						Job="Lawyer"
					},
					new Passenger
					{
						FirstName="Gareth",
						LastName="Potter",
						Email="ut.nisi@icloud.com",
						DOB=GenerateRandomDateTime(),
						Job="Lawyer"
					},
					new Passenger
					{
						FirstName="Donna",
						LastName="Mcknight",
						Email="malesuada.vel.convallis@icloud.couk",
						DOB=GenerateRandomDateTime(),
						Job="Lawyer"
					},
					new Passenger
					{
						FirstName="Chancellor",
						LastName="Gilliam",
						Email="turpis.aliquam@protonmail.couk",
						DOB=GenerateRandomDateTime()
					},
					new Passenger
					{
						FirstName="Jordan",
						LastName="Savage",
						Email="metus.vitae@aol.com",
						DOB=GenerateRandomDateTime()
					},
					new Passenger
					{
						FirstName="Kyle",
						LastName="Levine",
						Email="tellus.sem.mollis@protonmail.org",
						DOB=GenerateRandomDateTime()
					},
					new Passenger
					{
						FirstName="Jameson",
						LastName="Bradshaw",
						Email="et@icloud.net",
						DOB=GenerateRandomDateTime()
					},
					new Passenger
					{
						FirstName="Arsenio",
						LastName="Savage",
						Email="eu.turpis.nulla@outlook.org",
						DOB=GenerateRandomDateTime()
					},
					new Passenger
					{
						FirstName="Xaviera",
						LastName="Boyd",
						Email="sagittis.nullam@google.ca",
						DOB=GenerateRandomDateTime()
					},
					new Passenger
					{
						FirstName="Judith",
						LastName="Carver",
						Email="lorem.ipsum@icloud.com",
						DOB=GenerateRandomDateTime(),
						Job="Lawyer"
					},
					new Passenger
					{
						FirstName="Tatyana",
						LastName="Morris",
						Email="in@protonmail.org",
						DOB=GenerateRandomDateTime(),
						Job="Chef"
					},
					new Passenger
					{
						FirstName="Igor",
						LastName="Crosby",
						Email="a.malesuada@aol.ca",
						DOB=GenerateRandomDateTime(),
						Job="Software Engineer"
					},
					new Passenger
					{
						FirstName="Phelan",
						LastName="Anderson",
						Email="dui@outlook.edu",
						DOB=GenerateRandomDateTime(),
						Job="Lawyer"
					},
					new Passenger
					{
						FirstName="Aphrodite",
						LastName="Gordon",
						Email="nibh.phasellus@outlook.couk",
						DOB=GenerateRandomDateTime()
					},
					new Passenger
					{
						FirstName="Amery",
						LastName="Marquez",
						Email="donec.egestas@hotmail.com",
						DOB=GenerateRandomDateTime()
					},
					new Passenger
					{
						FirstName="Amir",
						LastName="Mclean",
						Email="etiam.gravida@protonmail.edu",
						DOB=GenerateRandomDateTime()
					},
					new Passenger
					{
						FirstName="Reece",
						LastName="Burgess",
						Email="nulla.interdum@protonmail.com",
						DOB=GenerateRandomDateTime()
					},
					new Passenger
					{
						FirstName="Christian",
						LastName="Lynch",
						Email="non.enim.mauris@google.ca",
						DOB=GenerateRandomDateTime()
					},
					new Passenger
					{
						FirstName="Zachary",
						LastName="Short",
						Email="nisi@protonmail.couk",
						DOB=GenerateRandomDateTime()
					},
					new Passenger
					{
						FirstName="Daryl",
						LastName="Rodgers",
						Email="mauris.molestie@aol.org",
						DOB=GenerateRandomDateTime(),
						Job="Lawyer"
					} 
				};

				if (!context.Passengers.Any())
				{
					context.AddRange(passengers);
					context.SaveChanges();
                }

				Random rand = new Random();

                Flight[] flights = new Flight[]
                {
					new Flight
                    {
						FlightNumber=rand.Next(1,3000)
                    },
					new Flight
					{
						FlightNumber=rand.Next(1,3000)
					},
					new Flight
					{
						FlightNumber=rand.Next(1,3000)
					},
					new Flight
					{
						FlightNumber=rand.Next(1,3000)
					},
					new Flight
					{
						FlightNumber=rand.Next(1,3000)
					},
					new Flight
					{
						FlightNumber=rand.Next(1,3000)
					},
					new Flight
					{
						FlightNumber=rand.Next(1,3000)
					},
					new Flight
					{
						FlightNumber=rand.Next(1,3000)
					},
					new Flight
					{
						FlightNumber=rand.Next(1,3000)
					},
					new Flight
					{
						FlightNumber=rand.Next(1,3000)
					},
					new Flight
					{
						FlightNumber=rand.Next(1,3000)
					},
					new Flight
					{
						FlightNumber=rand.Next(1,3000)
					},
					new Flight
					{
						FlightNumber=rand.Next(1,3000)
					},
					new Flight
					{
						FlightNumber=rand.Next(1,3000)
					},
					new Flight
					{
						FlightNumber=rand.Next(1,3000)
					},
					new Flight
					{
						FlightNumber=rand.Next(1,3000)
					},
					new Flight
					{
						FlightNumber=rand.Next(1,3000)
					},
					new Flight
					{
						FlightNumber=rand.Next(1,3000)
					},
					new Flight
					{
						FlightNumber=rand.Next(1,3000)
					},
					new Flight
					{
						FlightNumber=rand.Next(1,3000)
					}
				};

				if (!context.Flights.Any())
                {
					context.AddRange(flights);
					context.SaveChanges();
                }

				Itinerary[] itins = new Itinerary[]
				{
					new Itinerary
					{
						Confirmation="3f902bhng923bh4tg".ToUpper()
					},
					new Itinerary
					{
						Confirmation="239478fh2349t8h2394th".ToUpper()
					},
					new Itinerary
					{
						Confirmation="123op94rt78h213op4th".ToUpper()
					},
					new Itinerary
					{
						Confirmation="34tb34tbynu89".ToUpper()
					},
					new Itinerary
					{
						Confirmation="34vtyn89qw34vtbynu890".ToUpper()
					},
					new Itinerary
					{
						Confirmation="234v5gbny7891234vt".ToUpper()
					},
					new Itinerary
					{
						Confirmation="2345tgynu89234r5tbgnu89".ToUpper()
					},
					new Itinerary
					{
						Confirmation="2345gbyn7u892345gbyhnu89".ToUpper()
					},
					new Itinerary
					{
						Confirmation="hnu892345tgbhnu89".ToUpper()
					},
					new Itinerary
					{
						Confirmation="2345tb89hnum12345tbu89".ToUpper()
					},
					new Itinerary
					{
						Confirmation="aw3l4bkno89q34gb6lno789".ToUpper()
					},
					new Itinerary
					{
						Confirmation="q34gvbyn789loq34vyhn789o".ToUpper()
					},
					new Itinerary
					{
						Confirmation="byn89lpq34tbyn89p".ToUpper()
					},
					new Itinerary
					{
						Confirmation="2345tgbybyn89op34v5tgbyn89op".ToUpper()
					},
					new Itinerary
					{
						Confirmation="aw35l4ity78qw34ot9gb89".ToUpper()
					},
					new Itinerary
					{
						Confirmation="q34tlyn78i94vtg".ToUpper()
					},
					new Itinerary
					{
						Confirmation="v4fn3h17v4tb312gy78o".ToUpper()
					}
				};

				if (!context.Itineraries.Any())
                {
					context.AddRange(itins);
					context.SaveChanges();
                }
            };
		}
	}
}