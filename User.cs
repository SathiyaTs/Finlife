using System;
using System.Collections.Generic;

namespace Finlife.Models;

public partial class User
{
    public int Id { get; set; }

    public string EmailId { get; set; } = null!;

    public string Password { get; set; } = null!;

    public string Role { get; set; } = null!;

    public virtual Vendor? Vendor { get; set; }
}
