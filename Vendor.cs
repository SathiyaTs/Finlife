using System;
using System.Collections.Generic;

namespace Finlife.Models;

public partial class Vendor
{
    public int Id { get; set; }

    public string? UserId { get; set; }

    public string? CompanyName { get; set; }

    public string? Url { get; set; }

    public int? YearInBusiness { get; set; }

    public string? ServiceOffering { get; set; }

    public string? ServiceDescription { get; set; }

    public virtual ICollection<Admin> Admins { get; set; } = new List<Admin>();

    public virtual User IdNavigation { get; set; } = null!;
}
