using Microsoft.AspNetCore.Mvc;
using Finlife.Models;
namespace Finlife.Controllers;

[ApiController]
[Route("[controller]")]
public class Controller : ControllerBase
{
     
    private readonly   FinLifeContext _FinLifeContext;

    public Controller(FinLifeContext FinlifeContext)
    {
        this._FinLifeContext=FinlifeContext;
    }
     
    [HttpGet  ("GetVendor")]
    public IActionResult GetVendor()
    {
        var vendor=this._FinLifeContext.Vendors.ToList();
        return Ok(vendor);
    }
    [HttpGet  ("Getbycode/{code}")]
    public IActionResult Getbycode(int code)
    {
        var vendor=this._FinLifeContext.Vendors.FirstOrDefault(o=>o.Id==code);
        return Ok(vendor);
    }
    [HttpDelete  ("Remove/{code}")]
    public IActionResult Remove(int code)
    {
        var vendor=this._FinLifeContext.Vendors.FirstOrDefault(o=>o.Id==code);
        if(vendor!=null){
            this._FinLifeContext.Remove(vendor);
            this._FinLifeContext.SaveChanges();
            return Ok(true);
        }
        return Ok(false);
    }
    [HttpPost ("Create")]
    public IActionResult Create([FromQuery] Vendor _vendor)
    {
        var vendor=this._FinLifeContext.Vendors.FirstOrDefault(o=>o.Id==_vendor.Id);
        if(vendor!=null){
             vendor.CompanyName=_vendor.CompanyName;
             this._FinLifeContext.SaveChanges();

        }
        else{
            this._FinLifeContext.Vendors.Add(_vendor);
            this._FinLifeContext.SaveChanges();
        }
        return Ok(true);
    }
}
