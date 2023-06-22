using System;
using System.Collections.Generic;

namespace Finlife.Models;

public partial class AssessmentScore
{
    public int? AssessmentId { get; set; }

    public int? VendorId { get; set; }

    public int? QuestionSet { get; set; }

    public int? Score { get; set; }

    public string? CreatedBy { get; set; }

    public DateTime? CreatedOn { get; set; }
}
