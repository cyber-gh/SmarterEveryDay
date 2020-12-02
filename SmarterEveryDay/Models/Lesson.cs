using System.ComponentModel.DataAnnotations;

namespace SmarterEveryDay.Models
{
    
    public enum VideoSource
    {
        Youtube,
        Vimeo,
        Custom
    }
    
    public class Lesson
    {
        [Key]
        public string Id { get; set; }
        
        public string Title { get; set; }
        public string Subtitle { get; set; }
        public VideoSource Video { get; set; } 
        public string VideoUrl { get; set; }
        
        public LessonQuiz Quiz { get; set; }
    }
}