using System.Collections.Generic;
using Microsoft.Extensions.Configuration;
using Dapper;
using System.Threading.Tasks;
using System.Numerics;


public class GiftRepository : BaseRepository, IRepository<Gift>
{

    public GiftRepository(IConfiguration configuration) : base(configuration) { }

    public IEnumerable<Gift> GetAll()
    {
        using var connection = CreateConnection();
        IEnumerable<Gift> gifts = connection.Query<Gift>("SELECT * FROM Gifts;");
        return gifts;
    }

    public async Task<Gift> Get(int pc)
    {
        using var connection = CreateConnection();
        return await connection.QuerySingleAsync<Gift>("SELECT * FROM Gifts WHERE PersonCode=@PC ORDER BY RANDOM() LIMIT 1;", new { PC = pc });

    }
    public async Task<Gift> Insert(Gift giftObject)
    // (string Title, string Artist, int SongLengthCode, string Link, string SuggestedBy)
    {
        using var connection = CreateConnection();
        return await connection.QuerySingleAsync<Gift>("INSERT INTO Gifts (Person, PersonCode, GiftName, ImageLink, GiftLink) VALUES (@Person, @PersonCode, @GiftName, @ImageLink, @GiftLink); SELECT * FROM Gifts LIMIT 1;", giftObject);
    }

    public async Task<Gift> Update(Gift gift)
    {
        using var connection = CreateConnection();
        return await connection.QuerySingleAsync<Gift>("UPDATE Gifts SET Person = @Person, PersonCode = @PersonCode, GiftName = @GiftName, ImageLink = @ImageLink, GiftLink = @GiftLink WHERE Id = @Id;", gift);
    }
}
