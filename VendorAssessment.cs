using System;
using System.Collections.Generic;

namespace Finlife.Models;

public partial class VendorAssessment
{
    public int? AssessmentId { get; set; }

    public int? VendorId { get; set; }

    public int? QuestionId { get; set; }

    public int? QuestionNumber { get; set; }

    public string? QuestionTitle { get; set; }

    public string? OptionTitle { get; set; }

    public int? OptionValue { get; set; }

    public string? LastModifiedBy { get; set; }

    public DateTime? LastModifiedOn { get; set; }
}
