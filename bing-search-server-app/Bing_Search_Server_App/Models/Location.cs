using System.ComponentModel.DataAnnotations;

namespace Bing_Search_Server_App.Models
{
    public class Location
    {
        [Key]
        public int LocationId { get; set; }
        public string? LocationName { get; set; }


    }
    
}
