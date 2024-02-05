using Microsoft.EntityFrameworkCore;

namespace Bing_Search_Server_App.Models
{
    public class LocationContext : DbContext
    {
        public LocationContext(DbContextOptions options) : base(options) { }
        public DbSet<Location> Locations { get; set; }
    }
}
