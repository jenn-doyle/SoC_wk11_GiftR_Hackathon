CREATE TABLE Songs (
    Id SERIAL PRIMARY KEY,
    Title TEXT,
    Artist TEXT,
    SongLengthCode INT,
    Link VARCHAR,
    SuggestedBy TEXT
);

INSERT INTO
    Songs (Title, Artist, SongLengthCode, Link, SuggestedBy)
VALUES
--  //  Create code for time buckets (1 = 0-60 secs)(2 =61-90 )(3 =91-120 )(4 =121-150 )(5=151-180)(6=181-210)(7=211-240)(8=241-270) - must be converted on Input Componenets - front end 
    ('Save Your Tears', 'The Weekend', 8, 'https://www.youtube.com/watch?v=XXYlFuWEuKI&list=RDCLAK5uy_mkLtojKLOUUGwnu3ZnN5AaODijlieB-aQ&index=5', 'Craig Farrell'),
    ('We`re Good', 'Dua Lipa', 6, 'https://www.youtube.com/watch?v=jr47YisIsz8&list=RDCLAK5uy_mkLtojKLOUUGwnu3ZnN5AaODijlieB-aQ&index=11', 'Craig Farrell'),
    ('Red Alert', 'Basement Jaxx', 7, 'https://www.youtube.com/watch?v=SJyhZ-3Z8A8', 'Jenn Doyle'),
    ('Go Your Own Way', 'Fleetwood Mac', 7, 'https://www.youtube.com/watch?v=6ul-cZyuYq4', 'Jenn Doyle'),
    ('Let`s Dance', 'David Bowie', 8, 'https://www.youtube.com/watch?v=VbD_kBJc_gI', 'Bob Bobson III');