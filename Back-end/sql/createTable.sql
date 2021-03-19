CREATE TABLE Gifts (
    Id SERIAL PRIMARY KEY,
    Person TEXT,
    PersonCode INT,
    GiftName TEXT,
    ImageLink TEXT,
    GiftLink TEXT
);

INSERT INTO
    Gifts (Person, PersonCode, GiftName, ImageLink, GiftLink)
VALUES
    ('Mom', 1, 'Book', 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', 'https://www.waterstones.com/blog/the-best-books-for-new-mums'),
    ('Dad', 2, 'Book', 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', 'https://www.waterstones.com/blog/the-best-books-for-new-mums'),
    ('Sister', 3, 'Book', 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', 'https://www.waterstones.com/blog/the-best-books-for-new-mums'),
    ('Brother', 4, 'Book', 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', 'https://www.waterstones.com/blog/the-best-books-for-new-mums'),
    ('Mom', 1, 'Candle', 'https://cdn.shopify.com/s/files/1/1053/1740/products/Spring_500_x_500-01_600x600.jpg?v=1614856338', 'https://www.highbornlondon.com/collections/superior-skin-care/products/highborn-luxury-natural-candles?variant=32242271912038&gclid=Cj0KCQjwl9GCBhDvARIsAFunhsk3inA_jETEINj7gsjRzfcoxsKnO_zz1Cl8CyVl75WfqcZ1WB2onGMaAmNYEALw_wcB'),
    ('Grandparents', 5,  'Book', 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', 'https://www.waterstones.com/blog/the-best-books-for-new-mums'),
    ('Friend', 6, 'Book', 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', 'https://www.waterstones.com/blog/the-best-books-for-new-mums'),
    ('Colleague', 7, 'Book', 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', 'https://www.waterstones.com/blog/the-best-books-for-new-mums'),
    ('Friend', 6, 'Candle', 'https://cdn.shopify.com/s/files/1/1053/1740/products/Spring_500_x_500-01_600x600.jpg?v=1614856338', 'https://www.highbornlondon.com/collections/superior-skin-care/products/highborn-luxury-natural-candles?variant=32242271912038&gclid=Cj0KCQjwl9GCBhDvARIsAFunhsk3inA_jETEINj7gsjRzfcoxsKnO_zz1Cl8CyVl75WfqcZ1WB2onGMaAmNYEALw_wcB');