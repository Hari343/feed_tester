
$(function() {
    
    describe('RSS Feeds', () => {
        it('are defined', () => {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('Each feed has a URL', () => {
            allFeeds.forEach(feed => {
                expect(feed.url).toBeTruthy();
            });
        });

        it('Each feed has a name', () => {
            allFeeds.forEach(feed => {
                expect(feed.name).toBeTruthy();
            });
        });
    });


    describe('The menu', () => {
        let body = document.body;
        let sandwich = document.getElementsByClassName('menu-icon-link')[0];

        it('menu is hidden by default', () => {
            expect(body.classList).toContain('menu-hidden');
        });
 
        it('menu works as expected', () => {
            sandwich.click();
            expect(body.classList).not.toContain('menu-hidden');
            sandwich.click();
            expect(body.classList).toContain('menu-hidden');
        });       
    });



    describe('Initial Entries', () => {
        beforeEach(done => {
            loadFeed(0, () => {
                done();
            });
        });

        it('There is at least one entry', done => {
            expect(document.querySelectorAll('.feed .entry').length).toBeGreaterThan(0);
            done();
        });
    });




    describe('New Feed Selection', () => {
    
        let container0, container1;
        beforeEach(done => {
            loadFeed(0, () => {
                container0 = document.querySelectorAll('.feed .entry')[0];  
            });
            loadFeed(1, () => {
                container1 = document.querySelectorAll('.feed .entry')[0];
                done();
            });
        });

        it('When a new feed is loaded the content is actually changed', done => {
            expect(container0 === container1).toBe(false);
            done();
        });
    });
}());
