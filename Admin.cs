using System;
using System.Collections.Generic;

namespace Finlife.Models;

public partial class Admin
{
    public int Id { get; set; }

    public string? UserId { get; set; }

    public int? VendorId { get; set; }

    public string? Role { get; set; }

    public virtual Vendor? Vendor { get; set; }
}
