// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { getPosts } from '../fetch-utils.js';

const test = QUnit.test;

test('test getPosts', async (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'Free Keyboard';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const posts = await getPosts();
    const actual = posts[0].title;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
