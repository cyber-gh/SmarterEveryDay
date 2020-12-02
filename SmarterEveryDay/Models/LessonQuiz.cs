using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SmarterEveryDay.Models
{
    public class LessonQuiz
    {
        [Key]
        public string Id { get; set; }
        
        public IEnumerable<LessonQuizElement> Questions { get; set; }
    }
}