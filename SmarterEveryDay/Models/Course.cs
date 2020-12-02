using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SmarterEveryDay.Models
{
    public class Course
    {
        [Key]
        public string Id { get; set; }
        
        public string Name { get; set; }
        public string Description { get; set; }
        public string PreviewImageUrl { get; set; }
        public IEnumerable<Lesson> Lessons { get; set; }
        
    }
}