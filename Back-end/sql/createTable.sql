CREATE TABLE Gifts (
    Id SERIAL PRIMARY KEY,
    Person TEXT,
    GiftName TEXT,
    ImageLink TEXT,
    GiftLink TEXT
);

INSERT INTO
    Gifts (Person, GiftName, ImageLink, GiftLink)
VALUES
    ('Mom', 'Book', 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', 'https://www.waterstones.com/blog/the-best-books-for-new-mums'),
    ('Dad', 'Book', 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', 'https://www.waterstones.com/blog/the-best-books-for-new-mums'),
    ('Sister', 'Book', 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', 'https://www.waterstones.com/blog/the-best-books-for-new-mums'),
    ('Friend', 'Book', 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', 'https://www.waterstones.com/blog/the-best-books-for-new-mums'),
    ('Acquaintance', 'Book', 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', 'https://www.waterstones.com/blog/the-best-books-for-new-mums');