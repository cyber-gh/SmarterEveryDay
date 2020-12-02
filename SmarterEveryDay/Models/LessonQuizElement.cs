using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SmarterEveryDay.Models
{
    public class LessonQuizElement
    {
        [Key]
        public string Id { get; set; }
        public string Question { get; set; }
        public IEnumerable<PossibleAnswer> PossibleAnswers { get; set; }
        
        public string CorrectAnswer { get; set; }
    }

    public class PossibleAnswer
    {
        [Key]
        public string Id { get; set; }
        
        public string Answer { get; set; }
    }
}