using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using System.Numerics;


[ApiController]
[Route("gifts")]
public class GiftController : ControllerBase
{
    private readonly IRepository<Gift> _giftRepository;

    public GiftController(IRepository<Gift> giftRepository)
    {
        _giftRepository = giftRepository;
    }

    [HttpGet]
    public IEnumerable<Gift> GetAll()
    {
        return _giftRepository.GetAll();
    }

    [HttpGet("{pc}")]
    public async Task<IActionResult> Get(int pc)
    {
        try
        {
            var gift = await _giftRepository.Get(pc);
            return Ok(gift);
        }
        catch (Exception)
        {
            //handle exception
            return NotFound();
        }
    }

    [HttpPost]
    public async Task<IActionResult> Insert([FromBody] Gift gift)
    {
        try
        {
            Console.WriteLine(ModelState.IsValid);
            var insertGift = await _giftRepository.Insert(gift);
            return Ok(insertGift);

        }
        catch (Exception error)
        {
            Console.WriteLine(error.Message);
            Console.WriteLine(error.StackTrace);
            //handle exception
            return BadRequest();
        }
    }

    //POTENTIAL STRETCH GOAL
    [HttpPut("{id}")]
    public async Task<IActionResult> Update(long id, [FromBody] Gift gift)
    {
        try
        {
            var editGift = await _giftRepository.Update(gift);
            return Ok(editGift);
        }
        catch (Exception error)
        {
            Console.WriteLine(error.Message);
            Console.WriteLine(error.StackTrace);
            //handle exception
            return NotFound("no gift updated");
        }
    }
}