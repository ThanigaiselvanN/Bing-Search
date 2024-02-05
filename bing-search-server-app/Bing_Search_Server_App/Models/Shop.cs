using System.ComponentModel.DataAnnotations;

namespace Bing_Search_Server_App.Models
{
    public class Shop
    {
        [Key]
        public int ShopId { get; set; }
        public string? ShopName { get; set; }
        public int LocationId { get; set; }
        public TimeOnly OpenTime { get; set; }
        public TimeOnly CloseTime { get; set; }
    }
}
