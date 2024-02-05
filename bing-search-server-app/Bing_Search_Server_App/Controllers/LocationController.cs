using Bing_Search_Server_App.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Bing_Search_Server_App.Controllers
{

    [Route("api/location")]
    [ApiController]
    public class LocationController : ControllerBase
    {
        private readonly LocationContext locationContext;
        public LocationController(LocationContext locationContext)
        {
            this.locationContext = locationContext;
        }
        [HttpGet]
        [Route("GetLocations")]
        public List<Location> GetLocations()
        {
            List<Location> locations = new List<Location>();
            return locationContext.Locations.ToList();
        }
        [HttpPost]
        [Route("AddLocations")]
        public string AddLocation(Location location)
        {
            locationContext.Locations.Add(location);
            locationContext.SaveChanges();
            return "Location Added";
        }
        [HttpPost]
        [Route("GetLocation")]
        public Location GetLocation(string locationName)
        {
            return locationContext.Locations.Where(x => x.LocationName == locationName).FirstOrDefault();
        }
    }
}
