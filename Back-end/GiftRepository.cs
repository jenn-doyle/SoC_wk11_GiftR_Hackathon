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
    public async Task<Gift> Insert(Gift gift)
    // (string Title, string Artist, int SongLengthCode, string Link, string SuggestedBy)
    {
        using var connection = CreateConnection();
        return await connection.QuerySingleAsync<Gift>("INSERT INTO Gifts (Gift) VALUES (@Gift); SELECT * FROM Gifts LIMIT 1", gift);
    }

    public async Task<Gift> Update(Gift gift)
    {
        using var connection = CreateConnection();
        return await connection.QuerySingleAsync<Gift>("UPDATE Gifts SET Gift = @Gift WHERE Id = @Id;", gift);
    }
}
