using System;
using Xunit;
using System.Collections.Generic;
using Moq;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

public class GiftControllerTests
{
    private readonly Mock<IRepository<Gift>> _mockRepo;
    private readonly GiftController _controller;

    public GiftControllerTests()
    {
        _mockRepo = new Mock<IRepository<Gift>>();
        _controller = new GiftController(_mockRepo.Object);
    }

    [Fact]
    public void GetbyPc_WhenPcCalled_ReturnsAGift()
    {
        var giftResult = _controller.Get(3);

        Assert.IsType<Task<IActionResult>>(giftResult);
    }

    [Fact]
    public async Task GetbyPc_WhenPcIsPassed_ReturnsOkResult()
    {
        var pcResult = await _controller.Get(2);
        var actual = pcResult as OkObjectResult;

        Assert.NotNull(actual);
        Assert.Equal(200, actual.StatusCode);
    }
}
