using System;
using System.Collections.Generic;

namespace Finlife.Models;

public partial class Questionnaire
{
    public int Id { get; set; }

    public int? QuestionNumber { get; set; }

    public string? QuestionType { get; set; }

    public string? Category { get; set; }

    public string? Weightage { get; set; }

    public string? QuestionSet { get; set; }

    public string? LastModifiedBy { get; set; }

    public DateTime? LastModifiedOn { get; set; }
}
