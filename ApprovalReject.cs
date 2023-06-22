using System;
using System.Collections.Generic;

namespace Finlife.Models;

public partial class ApprovalReject
{
    public int? AssessmentId { get; set; }

    public int? VendorId { get; set; }

    public string? Decision { get; set; }

    public string? DecisionBy { get; set; }

    public DateTime? DecisionOn { get; set; }
}
