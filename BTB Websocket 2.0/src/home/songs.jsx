import React, { useState, useEffect } from 'react';
import './songs.css';

const userName = localStorage.getItem('userName');

//taylor swift
export const BlankSpace = () => {
    return (
        <>
            <header className="py-5">
                <div className="container text-center text-white">
                    <h1 className="fw-bold" style={{ fontSize: '2rem' }}>Blank Space by Taylor Swift</h1>
                </div>
            </header>

            <div className="container my-5">
                <div className="row">
                    {/* Song Lyrics */}
                    <div className="col-md-6">
                        <p className="text-center">Nice to meet you, where you been?
                            I could show you incredible things
                            Magic, madness, heaven, sin
                            Saw you there and I thought
                            Oh my God, look at that face
                            You look like my next mistake
                            Love's a game, wanna play? Ayy
                            New money, suit and tie
                            I can read you like a magazine
                            Ain't it funny, rumors fly
                            And I know you heard about me
                            So hey, let's be friends
                            I'm dyin' to see how this one ends
                            Grab your passport and my hand
                            I can make the bad guys good for a weekend
                            So it's gonna be forever
                            Or it's gonna go down in flames
                            You can tell me when it's over, mm
                            If the high was worth the pain
                            Got a long list of ex lovers
                            They'll tell you I'm insane
                            'Cause you know I love the players
                            And you love the game
                            'Cause we're young and we're reckless
                            We'll take this way too far
                            It'll leave you breathless, mm
                            Or with a nasty scar
                            Got a long list of ex lovers
                            They'll tell you I'm insane
                            But I've got a blank space, baby
                            And I'll write your name
                            Cherry lips, crystal skies
                            I could show you incredible things
                            Stolen kisses, pretty lies
                            You're the king, baby, I'm your queen
                            Find out what you want
                            Be that girl for a month
                            Wait, the worst is yet to come, oh no
                            Screaming, crying, perfect storms
                            I can make all the tables turn
                            Rose garden filled with thorns
                            Keep you second guessin' like
                            "Oh my God, who is she?"
                            I get drunk on jealousy
                            But you'll come back each time you leave
                            'Cause darling, I'm a nightmare dressed like a daydream
                            So it's gonna be forever
                            Or it's gonna go down in flames
                            You can tell me when it's over, mm
                            If the high was worth the pain
                            Got a long list of ex lovers
                            They'll tell you I'm insane
                            'Cause you know I love the players
                            And you love the game
                            'Cause we're young and we're reckless (oh)
                            We'll take this way too far
                            It'll leave you breathless, mm
                            Or with a nasty scar
                            Got a long list of ex lovers
                            They'll tell you I'm insane (insane)
                            But I've got a blank space, baby
                            And I'll write your name
                            Boys only want love if it's torture
                            Don't say I didn't, say I didn't warn ya
                            Boys only want love if it's torture
                            Don't say I didn't, say I didn't warn ya
                            So it's gonna be forever
                            Or it's gonna go down in flames
                            You can tell me when it's over (over), mm
                            If the high was worth the pain
                            Got a long list of ex lovers
                            They'll tell you I'm insane
                            'Cause you know I love the players
                            And you love the game
                            'Cause we're young and we're reckless (yeah)
                            We'll take this way too far
                            It'll leave you breathless, mm
                            Or with a nasty scar
                            Got a long list of ex lovers
                            They'll tell you I'm insane
                            But I've got a blank space, baby
                            And I'll write your name</p>
                    </div>

                    {/* Comment Section */}
                    <div className="col-md-6">
                        {/* Social Media Style Comments */}
                        <div className="d-flex align-items-start mb-4">
                            <img
                                src="https://media.gettyimages.com/id/635359428/photo/new-york-ny-rumor-the-german-shepherd-poses-for-photos-after-winning-best-in-show-at-the.jpg?s=612x612&w=0&k=20&c=R8o1kV8KPl9z7QunBBgOHupjm_sY7n-U-7PFKKJZSC0="
                                alt="User Avatar"
                                className="small-avatar me-3"
                            />
                            <div className="border p-3 rounded w-100">
                                <p className="mb-1"><strong>dude1:</strong> I really felt where (s)he said __________. I think that means ______</p>
                                <small className="text-muted">5 minutes ago</small>
                            </div>
                        </div>
                        <div className="d-flex align-items-start mb-4">
                            <img
                                src="https://media.gettyimages.com/id/85438939/photo/a-soft-coated-wheaten-terrier-dog-named-zoey-waits-for-the-start-of-a-parade-at-the-woofstock.jpg?s=612x612&w=0&k=20&c=n644q3tfcbFR1qEPG51O15KUiF3pMrKl5zuIY4V7sjk="
                                alt="User Avatar"
                                className="small-avatar me-3"
                            />
                            <div className="border p-3 rounded w-100">
                                <p className="mb-1"><strong>dude2:</strong> I really felt where (s)he said __________. I think that means ______</p>
                                <small className="text-muted">10 minutes ago</small>
                            </div>
                        </div>
                        <form>
                            <div className="form-group mb-3">
                                <textarea
                                    className="form-control"
                                    id="commentBox"
                                    name="commentBox"
                                    rows="4"
                                    placeholder="share what you think is behind the beat"
                                ></textarea>
                            </div>
                            <div className="text-center">
                                <input type="submit" className="btn btn-primary btn-primary-comment" value="Comment" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export const CruelSummer = () => {
    return (
        <>
            <header className="py-5">
                <div className="container text-center text-white">
                    <h1 className="fw-bold" style={{ fontSize: '2rem' }}>Cruel Summer by Taylor Swift</h1>
                </div>
            </header>

            {/* Main Content: Lyrics and Comment Section */}
            <div className="container my-5">
                <div className="row">
                    {/* Song Lyrics Section */}
                    <div className="col-md-6">
                        <p className="text-center">Fever dream high in the quiet of the night
                            You know that I caught it
                            Bad, bad boy
                            Shiny toy with a price
                            You know that I bought it
                            Killing me slow, out the window
                            I'm always waiting for you to be waiting below
                            Devils roll the dice, angels roll their eyes
                            What doesn't kill me makes me want you more
                            And it's new, the shape of your body
                            It's blue, the feeling I've got
                            And it's ooh, whoa, oh
                            It's a cruel summer
                            It's cool, that's what I tell 'em
                            No rules in breakable heaven
                            But ooh, whoa oh
                            It's a cruel summer
                            With you
                            Hang your head low
                            In the glow of the vending machine
                            I'm not dying
                            You say that we'll just screw it up in these trying times
                            We're not trying
                            So cut the headlights, summer's a knife
                            I'm always waiting for you just to cut to the bone
                            Devils roll the dice, angels roll their eyes
                            And if I bleed, you'll be the last to know
                            Oh, it's new, the shape of your body
                            It's blue, the feeling I've got
                            And it's ooh, whoa, oh
                            It's a cruel summer
                            It's cool, that's what I tell 'em
                            No rules in breakable heaven
                            But ooh, whoa, oh
                            It's a cruel summer
                            With you
                            I'm drunk in the back of the car
                            And I cried like a baby coming home from the bar (oh)
                            Said, "I'm fine, " but it wasn't true
                            I don't wanna keep secrets just to keep you
                            And I snuck in through the garden gate
                            Every night that summer just to seal my fate (oh)
                            And I screamed for whatever it's worth
                            "I love you, " ain't that the worst thing you ever heard?
                            He looks up grinning like a devil
                            It's new, the shape of your body
                            It's blue, the feeling I've got
                            And it's ooh, whoa, oh
                            It's a cruel summer
                            It's cool, that's what I tell 'em
                            No rules, in breakable heaven
                            But ooh, whoa, oh
                            It's a cruel summer
                            With you
                            I'm drunk in the back of the car
                            And I cried like a baby coming home from the bar (oh)
                            Said, "I'm fine, " but it wasn't true
                            I don't wanna keep secrets just to keep you
                            And I snuck in through the garden gate
                            Every night that summer just to seal my fate (oh)
                            And I screamed for whatever it's worth
                            "I love you, " ain't that the worst thing you ever heard?
                            (Yeah, yeah, yeah, yeah)</p>
                    </div>

                    {/* Comment Section */}
                    <div className="col-md-6">
                        {/* Social Media Style Comments */}
                        <div className="d-flex align-items-start mb-4">
                            <img
                                src="https://media.gettyimages.com/id/635359428/photo/new-york-ny-rumor-the-german-shepherd-poses-for-photos-after-winning-best-in-show-at-the.jpg?s=612x612&w=0&k=20&c=R8o1kV8KPl9z7QunBBgOHupjm_sY7n-U-7PFKKJZSC0="
                                alt="User Avatar"
                                className="small-avatar me-3"
                            />
                            <div className="border p-3 rounded w-100">
                                <p className="mb-1"><strong>dude1:</strong> I really felt where (s)he said __________. I think that means ______</p>
                                <small className="text-muted">5 minutes ago</small>
                            </div>
                        </div>
                        <div className="d-flex align-items-start mb-4">
                            <img
                                src="https://media.gettyimages.com/id/85438939/photo/a-soft-coated-wheaten-terrier-dog-named-zoey-waits-for-the-start-of-a-parade-at-the-woofstock.jpg?s=612x612&w=0&k=20&c=n644q3tfcbFR1qEPG51O15KUiF3pMrKl5zuIY4V7sjk="
                                alt="User Avatar"
                                className="small-avatar me-3"
                            />
                            <div className="border p-3 rounded w-100">
                                <p className="mb-1"><strong>dude2:</strong> I really felt where (s)he said __________. I think that means ______</p>
                                <small className="text-muted">10 minutes ago</small>
                            </div>
                        </div>
                        {/* Comment Form */}
                        <form>
                            <div className="form-group mb-3">
                                <textarea
                                    className="form-control"
                                    id="commentBox"
                                    name="commentBox"
                                    rows="4"
                                    placeholder="share what you think is behind the beat"
                                ></textarea>
                            </div>
                            <div className="text-center">
                                <input type="submit" className="btn btn-primary" value="Comment" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export const ShakeItOff = () => {
    return (
        <>
            <header className="py-5">
                <div className="container text-center text-white">
                    <h1 className="fw-bold" style={{ fontSize: '2rem' }}>Shake It Off by Taylor Swift</h1>
                </div>
            </header>

            {/* Main Content: Lyrics and Comment Section */}
            <div className="container my-5">
                <div className="row">
                    {/* Song Lyrics Section */}
                    <div className="col-md-6">
                        <p className="text-center">I stay out too late
                            Got nothing in my brain
                            That's what people say, mm-mm
                            That's what people say, mm-mm
                            I go on too many dates
                            But I can't make 'em stay
                            At least that's what people say, mm-mm
                            That's what people say, mm-mm
                            But I keep cruisin'
                            Can't stop, won't stop movin'
                            It's like I got this music in my mind
                            Sayin' it's gonna be alright
                            'Cause the players gonna play, play, play, play, play
                            And the haters gonna hate, hate, hate, hate, hate
                            Baby, I'm just gonna shake, shake, shake, shake, shake
                            I shake it off, I shake it off (hoo-hoo-hoo)
                            Heartbreakers gonna break, break, break, break, break
                            And the fakers gonna fake, fake, fake, fake, fake
                            Baby, I'm just gonna shake, shake, shake, shake, shake
                            I shake it off, I shake it off (hoo-hoo-hoo)
                            I never miss a beat
                            I'm lightnin' on my feet
                            And that's what they don't see, mm-mm
                            That's what they don't see, mm-mm
                            I'm dancin' on my own (dancin' on my own)
                            I make the moves up as I go (moves up as I go)
                            And that's what they don't know, mm-mm
                            That's what they don't know, mm-mm
                            But I keep cruisin'
                            Can't stop, won't stop groovin'
                            It's like I got this music in my mind
                            Sayin' it's gonna be alright
                            'Cause the players gonna play, play, play, play, play
                            And the haters gonna hate, hate, hate, hate, hate
                            Baby, I'm just gonna shake, shake, shake, shake, shake
                            I shake it off, I shake it off (hoo-hoo-hoo)
                            Heartbreakers gonna break, break, break, break, break
                            And the fakers gonna fake, fake, fake, fake, fake
                            Baby, I'm just gonna shake, shake, shake, shake, shake
                            I shake it off, I shake it off (hoo-hoo-hoo)
                            Shake it off, I shake it off
                            I, I, I shake it off, I shake it off
                            I, I, I shake it off, I shake it off
                            I, I, I shake it off, I shake it off (hoo-hoo-hoo)
                            Hey, hey, hey
                            Just think, while you've been gettin' down and out about the liars
                            And the dirty, dirty cheats of the world
                            You could've been gettin' down to this sick beat
                            My ex-man brought his new girlfriend
                            She's like, "Oh my God!" but I'm just gonna shake
                            And to the fella over there with the hella good hair
                            Won't you come on over, baby? We can shake, shake, shake (yeah)
                            Yeah, oh, oh
                            'Cause the players gonna play, play, play, play, play
                            And the haters gonna hate, hate, hate, hate, hate (haters gonna hate)
                            Baby, I'm just gonna shake, shake, shake, shake, shake
                            I shake it off, I shake it off (hoo-hoo-hoo)
                            Heartbreakers gonna break, break, break, break, break (mmm)
                            And the fakers gonna fake, fake, fake, fake, fake (and fake and fake and fake)
                            Baby, I'm just gonna shake, shake, shake, shake, shake
                            I shake it off, I shake it off (hoo-hoo-hoo)
                            Shake it off, I shake it off
                            I, I, I shake it off, I shake it off
                            I, I, I shake it off, I shake it off
                            I, I, I shake it off (yeah), I shake it off (hoo-hoo-hoo)
                            Shake it off, I shake it off
                            I, I, I shake it off, I shake it off (you got to)
                            I, I, I shake it off, I shake it off
                            I, I, I shake it off, I shake it off</p>
                    </div>

                    {/* Comment Section */}
                    <div className="col-md-6">
                        {/* Social Media Style Comments */}
                        <div className="d-flex align-items-start mb-4">
                            <img
                                src="https://media.gettyimages.com/id/635359428/photo/new-york-ny-rumor-the-german-shepherd-poses-for-photos-after-winning-best-in-show-at-the.jpg?s=612x612&w=0&k=20&c=R8o1kV8KPl9z7QunBBgOHupjm_sY7n-U-7PFKKJZSC0="
                                alt="User Avatar"
                                className="small-avatar me-3"
                            />
                            <div className="border p-3 rounded w-100">
                                <p className="mb-1"><strong>dude1:</strong> I really felt where (s)he said __________. I think that means ______</p>
                                <small className="text-muted">5 minutes ago</small>
                            </div>
                        </div>
                        <div className="d-flex align-items-start mb-4">
                            <img
                                src="https://media.gettyimages.com/id/85438939/photo/a-soft-coated-wheaten-terrier-dog-named-zoey-waits-for-the-start-of-a-parade-at-the-woofstock.jpg?s=612x612&w=0&k=20&c=n644q3tfcbFR1qEPG51O15KUiF3pMrKl5zuIY4V7sjk="
                                alt="User Avatar"
                                className="small-avatar me-3"
                            />
                            <div className="border p-3 rounded w-100">
                                <p className="mb-1"><strong>dude2:</strong> I really felt where (s)he said __________. I think that means ______</p>
                                <small className="text-muted">10 minutes ago</small>
                            </div>
                        </div>
                        {/* Comment Form */}
                        <form>
                            <div className="form-group mb-3">
                                <textarea
                                    className="form-control"
                                    id="commentBox"
                                    name="commentBox"
                                    rows="4"
                                    placeholder="share what you think is behind the beat"
                                ></textarea>
                            </div>
                            <div className="text-center">
                                <input type="submit" className="btn btn-primary" value="Comment" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
export const Lovely = () => {
    return (
        <>
            <header className="py-5">
                <div className="container text-center text-white">
                    <h1 className="fw-bold" style={{ fontSize: '2rem' }}>Lovely by Billie Eilish</h1>
                </div>
            </header>

            {/* Main Content: Lyrics and Comment Section */}
            <div className="container my-5">
                <div className="row">
                    {/* Song Lyrics Section */}
                    <div className="col-md-6">
                        <p className="text-center">Thought I found a way
                            Thought I found a way out (found)
                            But you never go away (never go away)
                            So I guess I gotta stay now
                            Oh, I hope some day I'll make it out of here
                            Even if it takes all night or a hundred years
                            Need a place to hide, but I can't find one near
                            Wanna feel alive, outside I can't fight my fear
                            Isn't it lovely, all alone?
                            Heart made of glass, my mind of stone
                            Tear me to pieces, skin to bone
                            Hello, welcome home
                            Walkin' out of time
                            Lookin' for a better place (lookin' for a better place)
                            Something's on my mind (mind)
                            Always in my head space
                            But I know some day I'll make it out of here
                            Even if it takes all night or a hundred years
                            Need a place to hide, but I can't find one near
                            Wanna feel alive, outside I can't fight my fear
                            Isn't it lovely, all alone?
                            Heart made of glass, my mind of stone
                            Tear me to pieces, skin to bone
                            Hello, welcome home
                            Whoa, yeah
                            Yeah, ah
                            Whoa, whoa
                            Hello, welcome home</p>
                    </div>

                    {/* Comment Section */}
                    <div className="col-md-6">
                        {/* Social Media Style Comments */}
                        <div className="d-flex align-items-start mb-4">
                            <img
                                src="https://media.gettyimages.com/id/635359428/photo/new-york-ny-rumor-the-german-shepherd-poses-for-photos-after-winning-best-in-show-at-the.jpg?s=612x612&w=0&k=20&c=R8o1kV8KPl9z7QunBBgOHupjm_sY7n-U-7PFKKJZSC0="
                                alt="User Avatar"
                                className="small-avatar me-3"
                            />
                            <div className="border p-3 rounded w-100">
                                <p className="mb-1"><strong>dude1:</strong> I really felt where (s)he said __________. I think that means ______</p>
                                <small className="text-muted">5 minutes ago</small>
                            </div>
                        </div>
                        <div className="d-flex align-items-start mb-4">
                            <img
                                src="https://media.gettyimages.com/id/85438939/photo/a-soft-coated-wheaten-terrier-dog-named-zoey-waits-for-the-start-of-a-parade-at-the-woofstock.jpg?s=612x612&w=0&k=20&c=n644q3tfcbFR1qEPG51O15KUiF3pMrKl5zuIY4V7sjk="
                                alt="User Avatar"
                                className="small-avatar me-3"
                            />
                            <div className="border p-3 rounded w-100">
                                <p className="mb-1"><strong>dude2:</strong> I really felt where (s)he said __________. I think that means ______</p>
                                <small className="text-muted">10 minutes ago</small>
                            </div>
                        </div>
                        {/* Comment Form */}
                        <form>
                            <div className="form-group mb-3">
                                <textarea
                                    className="form-control"
                                    id="commentBox"
                                    name="commentBox"
                                    rows="4"
                                    placeholder="share what you think is behind the beat"
                                ></textarea>
                            </div>
                            <div className="text-center">
                                <input type="submit" className="btn btn-primary" value="Comment" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};


export const Blue = () => {
    const [comments, setComments] = useState(() => {
        // Retrieve stored comments from localStorage, if any
        const savedComments = localStorage.getItem('comments');
        return savedComments ? JSON.parse(savedComments) : [];
    });
    const [newComment, setNewComment] = useState('');

    // Retrieve the logged-in username from localStorage
    const userName = localStorage.getItem('userName');
    
    // Track the user's likes locally to prevent multiple likes
    const [userLikes, setUserLikes] = useState(() => {
        const savedLikes = localStorage.getItem('userLikes');
        return savedLikes ? JSON.parse(savedLikes) : {};
    });

    // WebSocket connection for comments
    useEffect(() => {
        const ws = new WebSocket('ws://localhost:4000'); // Replace with your WebSocket server URL

        // Listen for incoming messages
        ws.onmessage = (event) => {
            const messageData = JSON.parse(event.data);

            // Handling incoming comment messages
            if (messageData.type === 'comment') {
                setComments((prevComments) => {
                    const updatedComments = [...prevComments, messageData.comment];
                    // Store the updated comments in localStorage
                    localStorage.setItem('comments', JSON.stringify(updatedComments));
                    return updatedComments;
                });
            }

            // Handling deletion of comments
            if (messageData.type === 'delete') {
                setComments((prevComments) => {
                    const updatedComments = prevComments.filter(comment => comment.id !== messageData.commentId);
                    // Update localStorage with the remaining comments
                    localStorage.setItem('comments', JSON.stringify(updatedComments));
                    return updatedComments;
                });
            }

            // Handling likes update
            if (messageData.type === 'like') {
                setComments((prevComments) => {
                    const updatedComments = prevComments.map((comment) => {
                        if (comment.id === messageData.commentId) {
                            return { ...comment, likes: comment.likes + 1 };
                        }
                        return comment;
                    });
                    // Store the updated comments in localStorage
                    localStorage.setItem('comments', JSON.stringify(updatedComments));
                    return updatedComments;
                });
                // Update userLikes to reflect the liked comment
                setUserLikes((prevLikes) => {
                    const updatedLikes = { ...prevLikes, [messageData.commentId]: true };
                    localStorage.setItem('userLikes', JSON.stringify(updatedLikes));
                    return updatedLikes;
                });
            }
        };

        // Cleanup WebSocket connection when component unmounts
        return () => {
            ws.close();
        };
    }, []);

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (newComment.trim()) {
            // Create a comment object with the username and message
            const commentData = {
                type: 'comment',
                comment: {
                    username: userName ? userName : 'User',
                    text: newComment,
                    likes: 0, // Initial likes count
                    id: Date.now(), // Unique ID for the comment
                }
            };

            // Send the comment to the WebSocket server
            const ws = new WebSocket('ws://localhost:4000'); // Replace with your WebSocket server URL
            ws.onopen = () => {
                ws.send(JSON.stringify(commentData)); // Send the comment with the username
                setNewComment(''); // Clear the input field after sending the comment
            };
        }
    };

    // Handle liking a comment
    const handleLike = (commentId) => {
        if (!userName) {
            alert('You must be logged in to like a comment');
            return;
        }

        // Prevent a user from liking a comment multiple times
        if (userLikes[commentId]) {
            alert('You can only like a comment once');
            return;
        }

        // Send the like message to the WebSocket server
        const ws = new WebSocket('ws://localhost:4000'); // Replace with your WebSocket server URL
        ws.onopen = () => {
            ws.send(JSON.stringify({
                type: 'like',
                commentId: commentId, // Send the comment ID to increment likes
            }));
        };
    };

    // Handle deleting a comment
    const handleDelete = (commentId) => {
        if (!userName) {
            alert('You must be logged in to delete a comment');
            return;
        }

        // Find the comment to check if the logged-in user is the owner
        const comment = comments.find(comment => comment.id === commentId);

        if (comment && comment.username === userName) {
            // Send the delete message to the WebSocket server
            const ws = new WebSocket('ws://localhost:4000'); // Replace with your WebSocket server URL
            ws.onopen = () => {
                ws.send(JSON.stringify({
                    type: 'delete',
                    commentId: commentId, // Send the comment ID to delete
                }));
            };

            // Optimistically remove the comment from local state
            setComments((prevComments) => {
                const updatedComments = prevComments.filter((comment) => comment.id !== commentId);
                // Update localStorage with the remaining comments
                localStorage.setItem('comments', JSON.stringify(updatedComments));
                return updatedComments;
            });
        } else {
            alert('You can only delete your own comments');
        }
    };

    return (
        <>
            <header className="py-5">
                <div className="container text-center text-white">
                    <h1 className="fw-bold" style={{ fontSize: '2rem' }}>BLUE by Billie Eilish</h1>
                </div>
            </header>

            <div className="container my-5">
                <div className="row">
                    {/* Song Lyrics Section */}
                    <div className="col-md-12">
                        <p className="text-center">
                            {/* Add the lyrics here */}
                            Mm, mm, mm
                            I try to live in black and white, but I'm so blue
                            {/* ... */}
                        </p>
                    </div>
                </div>

                {/* Comments Section */}
                <div className="row">
                    <div className="col-md-12">
                        {/* Comment Form */}
                        <fieldset id="comment-controls">
                            <textarea
                                className="form-control"
                                rows="4"
                                placeholder="Share what you think is behind the beat!"
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                            />
                            <div className="text-center mt-3">
                                <button
                                    type="submit"
                                    onClick={handleCommentSubmit}
                                    className="btn btn-primary comment"
                                >
                                    Post Comment
                                </button>
                            </div>
                        </fieldset>
                    </div>
                </div>

                {/* Display Comments Section */}
                <div className="row">
                    <div className="col-md-12">
                        {comments.map((comment) => (
                            <div className="d-flex align-items-start mb-4" key={comment.id}>
                                <img
                                    src="https://via.placeholder.com/50"
                                    alt="User Avatar"
                                    className="small-avatar me-3"
                                />
                                <div className="border p-3 rounded w-100">
                                    <p className="mb-1">
                                        <strong>{comment.username}:</strong> {comment.text}
                                    </p>
                                    <div className="d-flex justify-content-between">
                                        {/* Like Button */}
                                        <button 
                                            className="btn btn-sm btn-outline-primary"
                                            onClick={() => handleLike(comment.id)}
                                        >
                                            👍 {comment.likes}
                                        </button>
                                        
                                        {/* Delete Button */}
                                        {comment.username === userName && (
                                            <button 
                                                className="btn btn-sm btn-outline-danger"
                                                onClick={() => handleDelete(comment.id)}
                                            >
                                                🗑️ Delete
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};


export const Lunch = () => {
    return (
        <>
            <header className="py-5">
                <div className="container text-center text-white">
                    <h1 className="fw-bold" style={{ fontSize: '2rem' }}>LUNCH by Billie Eilish</h1>
                </div>
            </header>

            {/* Main Content: Lyrics and Comment Section */}
            <div className="container my-5">
                <div className="row">
                    {/* Song Lyrics Section */}
                    <div className="col-md-6">
                        <p className="text-center">Oh, oh-oh
                            I could eat that girl for lunch
                            Yeah, she dances on my tongue
                            Tastes like she might be the one
                            And I could never get enough
                            I could buy her so much stuff
                            It's a craving, not a crush, huh
                            "Call me when you're there"
                            Said, "I bought you somethin' rare
                            And I left it under 'Claire'"
                            So now, she's comin' up the stairs
                            So I'm pullin' up a chair
                            And I'm puttin' up my hair
                            Baby, I think you were made for me
                            Somebody write down the recipe
                            Been tryin' hard not to overeat
                            You're just so sweet
                            I'll run a shower for you like you want
                            Clothes on the counter for you, try 'em on
                            If I'm allowed, I'll help you take 'em off
                            (Huh)
                            I could eat that girl for lunch
                            Yeah, she dances on my tongue
                            Tastes like she might be the one
                            And I could never get enough
                            I could buy her so much stuff
                            It's a craving, not a crush, huh
                            Oh, I just wanna get her off, oh
                            Oh
                            Oh, oh
                            Oh
                            She's takin' pictures in the mirror
                            Oh my God, her skin's so clear
                            Tell her, "Bring that over here"
                            You need a seat? I'll volunteer
                            Now she's smilin' ear to ear
                            She's the headlights, I'm the deer
                            I've said it all before, but I'll say it again
                            I'm interested in more than just bein' your friend
                            I don't wanna break it, just want it to bend
                            Do you know how to bend?
                            I could eat that girl for lunch
                            She dances on my tongue
                            I know it's just a hunch
                            But she might be the one
                            I could
                            Eat that girl for lunch
                            Yeah, she
                            Tastes like she might be the one
                            I could
                            I could
                            Eat that girl for lunch
                            Yeah, she
                            Yeah, she
                            Tastes like she might be the one
                        </p>
                    </div>

                    {/* Comment Section */}
                    <div className="col-md-6">
                        {/* Social Media Style Comments */}
                        <div className="d-flex align-items-start mb-4">
                            <img
                                src="https://media.gettyimages.com/id/635359428/photo/new-york-ny-rumor-the-german-shepherd-poses-for-photos-after-winning-best-in-show-at-the.jpg?s=612x612&w=0&k=20&c=R8o1kV8KPl9z7QunBBgOHupjm_sY7n-U-7PFKKJZSC0="
                                alt="User Avatar"
                                className="small-avatar me-3"
                            />
                            <div className="border p-3 rounded w-100">
                                <p className="mb-1"><strong>dude1:</strong> I really felt where (s)he said __________. I think that means ______</p>
                                <small className="text-muted">5 minutes ago</small>
                            </div>
                        </div>
                        <div className="d-flex align-items-start mb-4">
                            <img
                                src="https://media.gettyimages.com/id/85438939/photo/a-soft-coated-wheaten-terrier-dog-named-zoey-waits-for-the-start-of-a-parade-at-the-woofstock.jpg?s=612x612&w=0&k=20&c=n644q3tfcbFR1qEPG51O15KUiF3pMrKl5zuIY4V7sjk="
                                alt="User Avatar"
                                className="small-avatar me-3"
                            />
                            <div className="border p-3 rounded w-100">
                                <p className="mb-1"><strong>dude2:</strong> I really felt where (s)he said __________. I think that means ______</p>
                                <small className="text-muted">10 minutes ago</small>
                            </div>
                        </div>
                        {/* Comment Form */}
                        <form>
                            <div className="form-group mb-3">
                                <textarea
                                    className="form-control"
                                    id="commentBox"
                                    name="commentBox"
                                    rows="4"
                                    placeholder="share what you think is behind the beat"
                                ></textarea>
                            </div>
                            <div className="text-center">
                                <input type="submit" className="btn btn-primary" value="Comment" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
//Drake 
export const UMyEverything = () => {
    return (
        <>
            <header className="py-5">
                <div className="container text-center text-white">
                    <h1 className="fw-bold" style={{ fontSize: '2rem' }}>U My Everything by Drake</h1>
                </div>
            </header>

            {/* Main Content: Lyrics and Comment Section */}
            <div className="container my-5">
                <div className="row">
                    {/* Song Lyrics Section */}
                    <div className="col-md-6">
                        <p className="text-center">Uh-huh, yeah
                            (Tay Keith, fuck these niggas up)
                            Yeah, yeah, yeah
                            Ah-ahem
                            I say hoo, baby (yep, I love you, bae)
                            Bae, I love you, you my everything (this for you)
                            I wrote this for you, baby
                            Bae, I love you, you my everything
                            I'm your main bitch, fuck a wedding ring
                            We both in fast cars and we switchin' lanes (yoom)
                            When I'm away from you, you always on my brain
                            Nigga, we go together, tell them hoes we go together (it's there)
                            Nigga, we go together, tell them hoes we go together (I swear)
                            Nigga, we go together, tell them hoes we go together (I don't care)
                            Nigga, we go together, tell them hoes we go together (Sexyy, in this world)
                            He protect me, let them pistols bang (baow)
                            If you fuck with me, go tattoo my name
                            I like to spoil him and he do the same
                            I think we soulmates, you my twin flame
                            Tell them hoes that shit dead, I don't play 'bout you (no)
                            He got my head fucked up and he hella cute
                            It turn me on when he pull up on me in that coupe (skrrt, skrrt)
                            They be askin' what is we? I'm like, "My whoopty-woo" (on Blood)
                            He be tellin' me he love me and I love him too (It's there)
                            I only knew him for a week, but I swear this my boo (I swear)
                            I might let the nigga trap me, bitch, my summer through (I don't care)
                            But I don't even give a fuck, do anything for you (in this world)
                            Bae, I love you, you my everything
                            I'm your main bitch, fuck a wedding ring
                            We both in fast cars and we switchin' lanes (yoom)
                            When I'm away from you, you always on my brain
                            Nigga, we go together, tell them hoes we go together (it's there)
                            Nigga, we go together, tell them hoes we go together (I swear)
                            Nigga, we go together, tell them hoes we go together (I don't care)
                            Nigga, we go together, tell them hoes we go together (yeah, Sexyy, in this world)
                            Give me the pussy, I'm bullyin' shit
                            Hit from the back and I'm pullin' your shit
                            I had some smoke in the city, I wanted to see you, but, baby, I couldn't just dip
                            You know the timin' we on when my niggas start lurkin' and tyin' they hoodies and shit
                            Soon as this shit get resolved, I'll turn to librarian for you, I'm bookin' that shit
                            Let's do it, Red, girl, I love you, let's do it
                            Showed enough love to the city, I promise, so let's get the fuck out St. Louis
                            Maybe we go to Saint Lucia, I been there, so I'll introduce you
                            Or maybe you go to Saint Martin with me if these niggas take break and quit startin' with me
                            Maybe we go to Saint Kitts, if you and your BD are calling it splits
                            Then maybe we call it an accident, you slip, you trip, you fall on my dick
                            Why you love me? Still a mystery, me and the surgeon got history
                            I changed a lot of girls' lives for real, they need a new body, they hittin' me, ayy
                            BBL Drizzy, they want a new body, they ask me for it
                            The last one, Jung, he did it for free 'cause I sent over so many past ones for him
                            But Red, don't even worry about all of that shit, just keep it natural for 'em, I swear
                            I got a passion for you, I swear, I got attraction for you, I swear
                            Yeah, you think I'm a bachelor, girl, but I swear
                            You ain't get your master's, but I'm still breakin' your back in the master bedroom, I swear
                            You send a pic in them shorts and I had to send you a caption like I was there
                            You the hood bitch of my dreams, Sexyy, girl, you just ask for me and I'm there
                            Bae, I love you, you my everything
                            I'm your main bitch, fuck a wedding ring
                            We both in fast cars and we switchin' lanes (yoom)
                            When I'm away from you, you always on my brain
                            Nigga, we go together, tell them hoes we go together (it's there)
                            Nigga, we go together, tell them hoes we go together (I swear)
                            Nigga, we go together, tell them hoes we go together (I don't care)
                            Nigga, we go together, tell them hoes we go together (Sexyy, in this world)
                        </p>
                    </div>

                    {/* Comment Section */}
                    <div className="col-md-6">
                        {/* Social Media Style Comments */}
                        <div className="d-flex align-items-start mb-4">
                            <img
                                src="https://media.gettyimages.com/id/635359428/photo/new-york-ny-rumor-the-german-shepherd-poses-for-photos-after-winning-best-in-show-at-the.jpg?s=612x612&w=0&k=20&c=R8o1kV8KPl9z7QunBBgOHupjm_sY7n-U-7PFKKJZSC0="
                                alt="User Avatar"
                                className="small-avatar me-3"
                            />
                            <div className="border p-3 rounded w-100">
                                <p className="mb-1"><strong>dude1:</strong> I really felt where (s)he said __________. I think that means ______</p>
                                <small className="text-muted">5 minutes ago</small>
                            </div>
                        </div>
                        <div className="d-flex align-items-start mb-4">
                            <img
                                src="https://media.gettyimages.com/id/85438939/photo/a-soft-coated-wheaten-terrier-dog-named-zoey-waits-for-the-start-of-a-parade-at-the-woofstock.jpg?s=612x612&w=0&k=20&c=n644q3tfcbFR1qEPG51O15KUiF3pMrKl5zuIY4V7sjk="
                                alt="User Avatar"
                                className="small-avatar me-3"
                            />
                            <div className="border p-3 rounded w-100">
                                <p className="mb-1"><strong>dude2:</strong> I really felt where (s)he said __________. I think that means ______</p>
                                <small className="text-muted">10 minutes ago</small>
                            </div>
                        </div>
                        {/* Comment Form */}
                        <form>
                            <div className="form-group mb-3">
                                <textarea
                                    className="form-control"
                                    id="commentBox"
                                    name="commentBox"
                                    rows="4"
                                    placeholder="share what you think is behind the beat"
                                ></textarea>
                            </div>
                            <div className="text-center">
                                <input type="submit" className="btn btn-primary" value="Comment" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export const OneDance = () => {
    return (
        <>
            <header className="py-5">
                <div className="container text-center text-white">
                    <h1 className="fw-bold" style={{ fontSize: '2rem' }}>One Dance by Drake</h1>
                </div>
            </header>

            {/* Main Content: Lyrics and Comment Section */}
            <div className="container my-5">
                <div className="row">
                    {/* Song Lyrics Section */}
                    <div className="col-md-6">
                        <p className="text-center">Baby, I like your style
                            Grips on your waist
                            Front way, back way
                            You know that I don't play
                            Streets not safe
                            But I never run away
                            Even when I'm away
                            OT, OT, there's never much love when we go OT
                            I pray to make it back in one piece
                            I pray, I pray
                            That's why I need a one dance
                            Got a Hennessy in my hand
                            One more time 'fore I go
                            Higher powers taking a hold on me
                            I need a one dance
                            Got a Hennessy in my hand
                            One more time 'fore I go
                            Higher powers taking a hold on me
                            Baby, I like your style
                            Strength and guidance
                            All that I'm wishin' for my friends
                            Nobody makes it from my ends
                            I had to bust up the silence
                            You know you gotta stick by me
                            Soon as you see the text, reply me
                            I don't wanna spend time fighting
                            We've got no time
                            And that's why I need a one dance
                            Got a Hennessy in my hand
                            One more time 'fore I go
                            Higher powers taking a hold on me
                            I need a one dance
                            Got a Hennessy in my hand
                            One more time 'fore I go
                            Higher powers taking a hold on me
                            Got a pretty girl and she love me long time
                            Wine it, wine it, and she love me long time
                            Ooh yeah, just steady and wine up
                            Back up, back up, back up and wine up
                            Back up, back up and wine it
                            Girl, just back up, back up, back up and wine down
                            Ooh yeah, just steady and wine up
                            Back, up, back up and wine it, girl
                            Ooh, tell me
                            I need to know, where do you wanna go?
                            'Cause if you're down, I'll take it slow
                            Make you lose control
                            Where, where, where
                            Where, where, where, where (ooh yeah, very long time)
                            (Back, up, back up and wine it, girl)
                            'Cause if you're down (back up, back up and)
                            'Cause if you're down (back up, back up and)
                            'Cause if you're down (back up, back up and)
                            I need a one dance
                            Got a Hennessy in my hand
                            One more time 'fore I go
                            Higher powers taking a hold on me
                            I need a one dance
                            Got a Hennessy in my hand
                            One more time 'fore I go
                            Higher powers taking a hold on me
                        </p>
                    </div>

                    {/* Comment Section */}
                    <div className="col-md-6">
                        {/* Social Media Style Comments */}
                        <div className="d-flex align-items-start mb-4">
                            <img
                                src="https://media.gettyimages.com/id/635359428/photo/new-york-ny-rumor-the-german-shepherd-poses-for-photos-after-winning-best-in-show-at-the.jpg?s=612x612&w=0&k=20&c=R8o1kV8KPl9z7QunBBgOHupjm_sY7n-U-7PFKKJZSC0="
                                alt="User Avatar"
                                className="small-avatar me-3"
                            />
                            <div className="border p-3 rounded w-100">
                                <p className="mb-1"><strong>dude1:</strong> I really felt where (s)he said __________. I think that means ______</p>
                                <small className="text-muted">5 minutes ago</small>
                            </div>
                        </div>
                        <div className="d-flex align-items-start mb-4">
                            <img
                                src="https://media.gettyimages.com/id/85438939/photo/a-soft-coated-wheaten-terrier-dog-named-zoey-waits-for-the-start-of-a-parade-at-the-woofstock.jpg?s=612x612&w=0&k=20&c=n644q3tfcbFR1qEPG51O15KUiF3pMrKl5zuIY4V7sjk="
                                alt="User Avatar"
                                className="small-avatar me-3"
                            />
                            <div className="border p-3 rounded w-100">
                                <p className="mb-1"><strong>dude2:</strong> I really felt where (s)he said __________. I think that means ______</p>
                                <small className="text-muted">10 minutes ago</small>
                            </div>
                        </div>
                        {/* Comment Form */}
                        <form>
                            <div className="form-group mb-3">
                                <textarea
                                    className="form-control"
                                    id="commentBox"
                                    name="commentBox"
                                    rows="4"
                                    placeholder="share what you think is behind the beat"
                                ></textarea>
                            </div>
                            <div className="text-center">
                                <input type="submit" className="btn btn-primary" value="Comment" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};


export const GodsPlan = () => {
    return (
        <>
            <header className="py-5">
                <div className="container text-center text-white">
                    <h1 className="fw-bold" style={{ fontSize: '2rem' }}>God's Plan by Drake</h1>
                </div>
            </header>

            {/* Main Content: Lyrics and Comment Section */}
            <div className="container my-5">
                <div className="row">
                    {/* Song Lyrics Section */}
                    <div className="col-md-6">
                        <p className="text-center">And, they wishin' and wishin' and wishin' and wishin'
                            They wishin' on me, yeah
                            I been movin' calm, don't start no trouble with me
                            Tryna keep it peaceful is a struggle for me
                            Don't pull up at 6 AM to cuddle with me
                            You know how I like it when you lovin' on me
                            I don't wanna die for them to miss me
                            Yes, I see the things that they wishin' on me
                            Hope I got some brothers that outlive me
                            They gon' tell the story, shit was different with me
                            God's plan, God's plan
                            I hold back, sometimes I won't, yeah
                            I feel good, sometimes I don't, ayy, don't
                            I finessed down Weston Road, ayy, 'nessed
                            Might go down a G-O-D, yeah, wait
                            I go hard on Southside G, yeah, Way
                            I make sure that north side eat
                            And still
                            Bad things
                            It's a lot of bad things
                            That they wishin' and wishin' and wishin' and wishin'
                            They wishin' on me
                            Bad things
                            It's a lot of bad things
                            That they wishin' and wishin' and wishin' and wishin'
                            They wishin' on me
                            Yeah, ayy, ayy (ayy)
                            She say, "Do you love me?" I tell her, "Only partly
                            I only love my bed and my momma, I'm sorry"
                            Fifty Dub, I even got it tatted on me
                            81, they'll bring the crashers to the party
                            And you know me
                            Turn the O2 into the O3, dog
                            Without 40, Oli', there'd be no me
                            'Magine if I never met the broskis
                            God's plan, God's plan
                            I can't do this on my own, ayy, no, ayy
                            Someone watchin' this shit close, yep, close
                            I've been me since Scarlett Road, ayy, road, ayy
                            Might go down as G-O-D, yeah, wait
                            I go hard on Southside G, ayy, Way
                            I make sure that north side eat, yuh
                            And still
                            Bad things
                            It's a lot of bad things
                            That they wishin' and wishin' and wishin' and wishin'
                            They wishin' on me
                            Yeah, yeah
                            Bad things
                            It's a lot of bad things
                            That they wishin' and wishin' and wishin' and wishin'
                            They wishin' on me
                            Yeah
                        </p>
                    </div>

                    {/* Comment Section */}
                    <div className="col-md-6">
                        {/* Social Media Style Comments */}
                        <div className="d-flex align-items-start mb-4">
                            <img
                                src="https://media.gettyimages.com/id/635359428/photo/new-york-ny-rumor-the-german-shepherd-poses-for-photos-after-winning-best-in-show-at-the.jpg?s=612x612&w=0&k=20&c=R8o1kV8KPl9z7QunBBgOHupjm_sY7n-U-7PFKKJZSC0="
                                alt="User Avatar"
                                className="small-avatar me-3"
                            />
                            <div className="border p-3 rounded w-100">
                                <p className="mb-1"><strong>dude1:</strong> I really felt where (s)he said __________. I think that means ______</p>
                                <small className="text-muted">5 minutes ago</small>
                            </div>
                        </div>
                        <div className="d-flex align-items-start mb-4">
                            <img
                                src="https://media.gettyimages.com/id/85438939/photo/a-soft-coated-wheaten-terrier-dog-named-zoey-waits-for-the-start-of-a-parade-at-the-woofstock.jpg?s=612x612&w=0&k=20&c=n644q3tfcbFR1qEPG51O15KUiF3pMrKl5zuIY4V7sjk="
                                alt="User Avatar"
                                className="small-avatar me-3"
                            />
                            <div className="border p-3 rounded w-100">
                                <p className="mb-1"><strong>dude2:</strong> I really felt where (s)he said __________. I think that means ______</p>
                                <small className="text-muted">10 minutes ago</small>
                            </div>
                        </div>
                        {/* Comment Form */}
                        <form>
                            <div className="form-group mb-3">
                                <textarea
                                    className="form-control"
                                    id="commentBox"
                                    name="commentBox"
                                    rows="4"
                                    placeholder="share what you think is behind the beat"
                                ></textarea>
                            </div>
                            <div className="text-center">
                                <input type="submit" className="btn btn-primary" value="Comment" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

//Kendrick Lamar
export const NotLikeUs = () => {
    return (
        <>
            <header className="py-5">
                <div className="container text-center text-white">
                    <h1 className="fw-bold" style={{ fontSize: '2rem' }}>Not Like Us by Kendrick Lamar</h1>
                </div>
            </header>

            {/* Main Content: Lyrics and Comment Section */}
            <div className="container my-5">
                <div className="row">
                    {/* Song Lyrics Section */}
                    <div className="col-md-6">
                        <p className="text-center">… Psst, I see dead people
                            (Mustard on the beat, hoe)
                            … Ayy, Mustard on the beat, hoe
                            Deebo, any rap nigga, he a free throw
                            Man down, call an amberlamps, tell him, "Breathe, bro"
                            Nail a nigga to the cross, he walk around like Teezo
                            What's up with these jabroni-ass niggas tryna see Compton?
                            The industry can hate me, fuck 'em all and they mama
                            How many opps you really got? I mean, it's too many options
                            I'm finna pass on this body, I'm John Stockton
                            … Beat your ass and hide the Bible if God watchin'
                            Sometimes you gotta pop out and show niggas
                            Certified boogeyman, I'm the one that up the score with 'em
                            Walk him down, whole time I know he got some hoe in him
                            Pole on him, extort shit, bully, Death Row on him
                            … Say, Drake, I hear you like 'em young
                            You better not ever go to cell block one
                            To any bitch that talk to him and they in love
                            Just make sure you hide your lil' sister from him
                            They tell me Chubbs the only one that get your hand-me-downs
                            And PARTY at the party, playin' with his nose now
                            And Baka got a weird case, why is he around?
                            Certified Lover Boy? Certified pedophiles
                            … Wop, wop, wop, wop, wop, Dot, fuck 'em up
                            Wop, wop, wop, wop, wop, I'ma do my stuff
                            Why you trollin' like a bitch? Ain't you tired?
                            Tryna strike a chord and it's probably A-Minor
                            … They not like us, they not like us, they not like us
                            They not like us, they not like us, they not like us
                            … You think the Bay gon' let you disrespect Pac, nigga?
                            I think that Oakland show gon' be your last stop, nigga
                            Did Cole fouI, I don't know why you still pretendin'
                            What is the owl? Bird niggas and bird bitches, go
                            The audience not dumb
                            Shape the stories how you want, hey, Drake, they're not slow
                            Rabbit hole is still deep, I can go further, I promise
                            Ain't that somethin'? B-Rad stands for bitch
                            And you Malibu most wanted
                            … Ain't no law, boy, you ballboy, fetch Gatorade or somethin'
                            Since 2009, I had this bitch jumpin'
                            You niggas'll get a wedgie, be flipped over your boxers
                            What OVO for? The "Other Vaginal Option"? Pussy
                            Nigga better straighten they posture, got famous all up in Compton
                            Might write this for the docket, tell the pop star, "Quit hidin'"
                            Fuck a caption, want action, no accident, and I'm hands-on
                            He fuck around, get polished
                            … Fucked on Wayne girl while he was in jail, that's connivin'
                            Then get his face tatted like a bitch apologizin'
                            I'm glad DeRoz' came home, y'all didn't deserve him neither
                            From Alondra down to Central, nigga better not speak on Serena
                            And your homeboy need subpoena, that predator move in flocks
                            That name gotta be registered and placed on neighborhood watch
                            I lean on you niggas like another line of Wock'
                            Yeah, it's all eyes on me, and I'ma send it up to Pac, ayy
                            … Put the wrong label on me, I'ma get 'em dropped, ayy
                            Sweet Chin Music, and I won't pass the aux, ayy
                            How many stocks do I really have in stock? Ayy
                            One, two, three, four, five, plus five, ayy
                            Devil is a lie, he a 69 God, ayy
                            Freaky-ass niggas need to stay they ass inside, ayy
                            Roll they ass up like a fresh pack of 'za, ayy
                            City is back up, it's a must, we outside, ayy
                            … They not like us, they not like us, they not like us
                            They not like us, they not like us, they not like us
                            … Once upon a time, all of us was in chains
                            Homie still doubled down callin' us some slaves
                            Atlanta was the Mecca, buildin' railroads and trains
                            Bear with me for a second, let me put y'all on game
                            The settlers was usin' town folk to make 'em richer
                            Fast-forward, 2024, you got the same agenda
                            You run to Atlanta when you need a check balance
                            Let me break it down for you, this the real nigga challenge
                            … You called Future when you didn't see the club (ayy, what?)
                            Lil Baby helped you get your lingo up (what?)
                            21 gave you false street cred
                            Thug made you feel like you a slime in your head (ayy, what?)
                            Quavo said you can be from Northside (what?)
                            2 Chainz say you good, but he lied
                            You run to Atlanta when you need a few dollars
                            No, you not a colleague, you a fuckin' colonizer
                            … The family matter, and the truth of the matter
                            It was God's plan to show y'all the liar
                            … Mm
                            Mm-mm
                            He a fan, he a fan, he a fan (mm)
                            He a fan, he a fan, he a-
                            Freaky-ass nigga, he a 69 God
                            Freaky-ass nigga, he a 69 God
                            Hey, hey, hey, hey, run for your life
                            Hey, hey, hey, hey, run for your life
                            Freaky-ass nigga, he a 69 God
                            Freaky-ass nigga, he a 69 God
                            Hey, hey, hey, hey, run for your life
                            Hey, hey, hey, hey, run for your life
                            … Let me hear you say, "OV-hoe" (OV-hoe)
                            Say, "OV-hoe" (OV-hoe)
                            Then step this way, step that way
                            Then step this way, step that way
                            … Are you my friend?
                            Are we locked in?
                            Then step this way, step that way
                            Then step this way, step that way
                        </p>
                    </div>

                    {/* Comment Section */}
                    <div className="col-md-6">
                        {/* Social Media Style Comments */}
                        <div className="d-flex align-items-start mb-4">
                            <img
                                src="https://media.gettyimages.com/id/635359428/photo/new-york-ny-rumor-the-german-shepherd-poses-for-photos-after-winning-best-in-show-at-the.jpg?s=612x612&w=0&k=20&c=R8o1kV8KPl9z7QunBBgOHupjm_sY7n-U-7PFKKJZSC0="
                                alt="User Avatar"
                                className="small-avatar me-3"
                            />
                            <div className="border p-3 rounded w-100">
                                <p className="mb-1"><strong>dude1:</strong> I really felt where (s)he said __________. I think that means ______</p>
                                <small className="text-muted">5 minutes ago</small>
                            </div>
                        </div>
                        <div className="d-flex align-items-start mb-4">
                            <img
                                src="https://media.gettyimages.com/id/85438939/photo/a-soft-coated-wheaten-terrier-dog-named-zoey-waits-for-the-start-of-a-parade-at-the-woofstock.jpg?s=612x612&w=0&k=20&c=n644q3tfcbFR1qEPG51O15KUiF3pMrKl5zuIY4V7sjk="
                                alt="User Avatar"
                                className="small-avatar me-3"
                            />
                            <div className="border p-3 rounded w-100">
                                <p className="mb-1"><strong>dude2:</strong> I really felt where (s)he said __________. I think that means ______</p>
                                <small className="text-muted">10 minutes ago</small>
                            </div>
                        </div>
                        {/* Comment Form */}
                        <form>
                            <div className="form-group mb-3">
                                <textarea
                                    className="form-control"
                                    id="commentBox"
                                    name="commentBox"
                                    rows="4"
                                    placeholder="share what you think is behind the beat"
                                ></textarea>
                            </div>
                            <div className="text-center">
                                <input type="submit" className="btn btn-primary" value="Comment" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export const MoneyTrees = () => {
    return (
        <>
            <header className="py-5">
                <div className="container text-center text-white">
                    <h1 className="fw-bold" style={{ fontSize: '2rem' }}>Money Trees by Kendrick Lamar</h1>
                </div>
            </header>

            {/* Main Content: Lyrics and Comment Section */}
            <div className="container my-5">
                <div className="row">
                    {/* Song Lyrics Section */}
                    <div className="col-md-6">
                        <p className="text-center">Uh, me and my niggas tryna get it, ya bish (ya bish, ya bish)
                            Hit the house lick, tell me, is you wit' it, ya bish? (Ya bish, ya bish)
                            Home invasion was persuasive (was persuasive, was persuasive)
                            From nine to five I know it's vacant, ya bish (ya bish, ya bish)
                            Dreams of livin' life like rappers do (like rappers do, like rappers do)
                            Back when condom wrappers wasn't cool (they wasn't cool, they wasn't cool)
                            I fucked Sherane and went to tell my bros (tell my bros, tell my bros)
                            Then Usher Raymond "Let It Burn" came on ("Let Burn" came on, "Let Burn" came on)
                            Hot sauce all in our Top Ramen, ya bish (ya bish, ya bish)
                            Park the car, then we start rhymin', ya bish (ya bish, ya bish)
                            The only thing we had to free our mind (free our mind, free our mind)
                            Then freeze that verse when we see dollar signs (see dollar signs, see dollar signs)
                            You lookin' like an easy come-up, ya bish (ya bish, ya bish)
                            A silver spoon, I know you come from, ya bish (ya bish, ya bish)
                            And that's a lifestyle that we never knew (we never knew, we never knew)
                            Go at a reverend for the revenue
                            It go Halle Berry or hallelujah
                            Pick your poison, tell me what you doin'
                            Everybody gon' respect the shooter
                            But the one in front of the gun lives forever (the one in front of the gun, forever)
                            And I been hustlin' all-day, this-a-way, that-a-way
                            Through canals and alleyways, just to say
                            Money trees is the perfect place for shade, and that's jus' how I feel
                            Nah, nah, a dollar might just fuck your main bitch
                            That's jus' how I feel, nah
                            A dollar might say fuck them niggas that you came with
                            That's jus' how I feel, nah, nah
                            A dollar might just make that lane switch
                            That's jus' how I feel, nah
                            A dollar might turn to a million and we all rich
                            That's jus' how I feel
                            Dreams of livin' life like rappers do (like rappers do, like rappers do)
                            Bump that new E-40 after school (way after school, way after school)
                            You know, "Big Ballin' With My Homies" (my homies)
                            Earl Stevens had us thinkin' rational (thinkin' rational, that's rational)
                            Back to reality, we poor, ya bish (ya bish, ya bish)
                            Another casualty at war, ya bish (ya bish, ya bish)
                            Two bullets in my Uncle Tony head (my Tony head, my Tony head)
                            He said one day I'll be on tour, ya bish (ya bish, ya bish)
                            That Louis Burgers never be the same (won't be the same, won't be the same)
                            A Louis belt that never ease that pain (won't ease that pain, won't ease that pain)
                            But I'ma purchase when that day is jerkin' (that day is jerkin', day is jerkin')
                            Pull off at Church's, with Pirellis skirtin' (Pirellis skirtin', Pirellis skirtin')
                            Gang signs out the window, ya bish (ya bish, ya bish)
                            Hopin' all of 'em offend you, ya bish (ya bish, ya bish)
                            They say yo' hood is a pot o' gold (a pot o' gold, a pot o' gold)
                            And we gon' crash it when nobody's home
                            It go Halle Berry or hallelujah
                            Pick your poison, tell me what you doin'
                            Everybody gon' respect the shooter
                            But the one in front of the gun lives forever (the one in front of the gun, forever)
                            And I been hustlin' all-day, this-a-way, that-a-way
                            Through canals and alleyways, just to say
                            Money trees is the perfect place for shade, and that's jus' how I feel
                            Nah, nah, a dollar might just fuck your main bitch
                            That's jus' how I feel, nah
                            A dollar might say fuck them niggas that you came with
                            That's jus' how I feel, nah, nah
                            A dollar might just make that lane switch
                            That's jus' how I feel, nah
                            A dollar might turn to a million and we all rich
                            That's jus' how I feel
                            Be the last one out to get this dough? No way
                            Love one of you bucket headed hoes? No way
                            Hit the streets, then we break the code? No way
                            Hit the brakes when they on patrol? No way
                            Be the last one out to get this dough? No way
                            Love one of you bucket headed hoes? No way
                            Hit the streets, then we break the code? No way
                            Hit the brakes when they on patrol? No way
                            'Magine Rock up in 'em projects where 'em niggas pick your pockets
                            Santa Claus don't miss 'em stockings, liquors spillin', pistols poppin'
                            Bakin' soda YOLA whippin', ain't no turkey on Thanksgivin'
                            My homeboy just dome'd a nigga, I just hope the Lord forgive him
                            Pots with cocaine residue, every day I'm hustlin'
                            What else is a thug to do when you eatin' cheese from the government?
                            Gotta provide for my daughter 'nem get the fuck-up out my way, bitch
                            Got that drum and I got them bands just like a parade, bitch
                            Drop that work up in the bushes, hope them boys don't see my stash
                            If they do, tell the truth, this the last time you might see my ass
                            From the gardens where the grass ain't cut, them serpents lurkin', Blood
                            Bitches sellin' pussy, niggas sellin' drugs, but it's all good
                            Broken promises, steal your watch and tell you what time it is
                            Take your J's and tell you to kick it where a Foot Locker is
                            In the streets with a heater under my Dungarees
                            Dreams of me gettin' shaded under a money tree
                            It go Halle Berry or hallelujah
                            Pick your poison, tell me what you doin'
                            Everybody gon' respect the shooter
                            But the one in front of the gun lives forever (the one in front of the gun, forever)
                            And I been hustlin' all-day, this-a-way, that-a-way
                            Through canals and alleyways, just to say
                            Money trees is the perfect place for shade, and that's jus' how I feel
                            Kendrick, just bring my car back, man, I-I called in for another appointment
                            I figured you weren't gonna be back here on time anyway
                            Look, shit-shit, I just wanna get out the house, man
                            This man is on one, he feelin' good as a motherfucker
                            Shit, I'm tryna get my thing goin', too, I'm goin' to Merlin' house
                            Just bring my car back, shit, he faded, he feelin' good, look, listen to him (body, I want your body)
                            'Cause you got a big ol' fat ass
                            Girl, girl, I want your body, I want your body, 'cause of that big ol' fat ass
                            (Girl) see, he high as hell, shit, and he ain't even trippin' off them dominoes no more
                            Just bring the car back, did somebody say dominoes?
                        </p>
                    </div>

                    {/* Comment Section */}
                    <div className="col-md-6">
                        {/* Social Media Style Comments */}
                        <div className="d-flex align-items-start mb-4">
                            <img
                                src="https://media.gettyimages.com/id/635359428/photo/new-york-ny-rumor-the-german-shepherd-poses-for-photos-after-winning-best-in-show-at-the.jpg?s=612x612&w=0&k=20&c=R8o1kV8KPl9z7QunBBgOHupjm_sY7n-U-7PFKKJZSC0="
                                alt="User Avatar"
                                className="small-avatar me-3"
                            />
                            <div className="border p-3 rounded w-100">
                                <p className="mb-1"><strong>dude1:</strong> I really felt where (s)he said __________. I think that means ______</p>
                                <small className="text-muted">5 minutes ago</small>
                            </div>
                        </div>
                        <div className="d-flex align-items-start mb-4">
                            <img
                                src="https://media.gettyimages.com/id/85438939/photo/a-soft-coated-wheaten-terrier-dog-named-zoey-waits-for-the-start-of-a-parade-at-the-woofstock.jpg?s=612x612&w=0&k=20&c=n644q3tfcbFR1qEPG51O15KUiF3pMrKl5zuIY4V7sjk="
                                alt="User Avatar"
                                className="small-avatar me-3"
                            />
                            <div className="border p-3 rounded w-100">
                                <p className="mb-1"><strong>dude2:</strong> I really felt where (s)he said __________. I think that means ______</p>
                                <small className="text-muted">10 minutes ago</small>
                            </div>
                        </div>
                        {/* Comment Form */}
                        <form>
                            <div className="form-group mb-3">
                                <textarea
                                    className="form-control"
                                    id="commentBox"
                                    name="commentBox"
                                    rows="4"
                                    placeholder="share what you think is behind the beat"
                                ></textarea>
                            </div>
                            <div className="text-center">
                                <input type="submit" className="btn btn-primary" value="Comment" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export const LikeThat = () => {
    return (
        <>
            <header className="py-5">
                <div className="container text-center text-white">
                    <h1 className="fw-bold" style={{ fontSize: '2rem' }}>Like That by Kendrick Lamar</h1>
                </div>
            </header>

            {/* Main Content: Lyrics and Comment Section */}
            <div className="container my-5">
                <div className="row">
                    {/* Song Lyrics Section */}
                    <div className="col-md-6">
                        <p className="text-center">Gotta fire my joint up on this bitch Young Metro, Metro, young Metro, three times Yeah Stickin' to the code, all these hoes for the streets I put it in her nose, it's gon' make her pussy leak Pussy niggas told, ain't gon' wake up out they sleep You can't hear that switch, but you can hear them niggas scream All my hoes do shrooms, nigga, all my hoes do coke 20-carat ring, I put my fingers down her throat (uh, uh, uh) If I lose a carat, she might choke (uh, uh, uh) I know she gon' swallow, she a G.O.A.T. (uh, uh, uh) Freeband nigga, bring the racks in Got the shooters in the corner like the pack in She think 'cause she exotic bitch, she attractive That's that shit'll get you put up out the section, brrt And the motto still the same Ball like I won a championship game You know these hoes hungry, they gon' fuck for a name I put her on the gang, she get fucked for a chain Got your girl in this bitch, she twirlin' on the dick (he was once a thug, he was, he -) (He was once a thug, he was, he -) I got syrup in this bitch, turn up in this bitch (he was once a thug, he was, he -) And it's 'bout the 'Ercs in this bitch, get murked in this bitch (he was once a thug, he was, he -) All these pointers on me baby, you know it's game time (he was once a thug, he was, he -) Bring a friend, bitch, we fucked 'em at the same time (he was once a thug, he was, he -) I'm a different nigga, no, we not the same kind (he was once a thug, he was, he -) You can have that lil' - 'cause she ain't mine (yeah) (he was once a thug from around the way) Young dope dealer, sellin' dope, is you like that? (If you like that) Kickin' doors, kickin' in doors, is you like that? (Yeah) Young throwed nigga, sellin' lows, is you like that? (Yeah) All 24, you on go, is you like that? (If you like that) Niggas from the bottom really like that (if you like that) (he was once a thug, he was, he -) Steppin' in Balencis if you like that (if you like that) (he was once a thug, he was, he -) Pop another bottle if you like that (if you like that) (he was once a thug, he was, he -) (He was once a thug from around the way) These niggas talkin' out of they necks Don't pull no coffin out of your mouth I'm way too paranoid for a threat Ayy-ayy, let's get it, bro D-O-T, the money, power, respect The last one is better Say, it's a lot of goofies with a check I mean, ah, I hope them sentiments symbolic Ah, my temperament bipolar, I choose violence Okay, let's get it up, it's time for him to prove that he's a problem Niggas clickin' up, but cannot be legit, no 40 water, tell 'em Ah, yeah, huh, yeah, get up with me (he was once a thug, he was, he -) Fuck sneak dissin', first person shooter (he was once a thug, he was, he -) I hope they came with three switches (he was once a thug, he was, he -) I crash out, like, "Fuck rap, " this Melle Mel if I had to (he was once a thug, he was, he -) Got two T's with me, I'm snatchin' chains and burnin' tattoos It's up, lost too many soldiers not to play it safe If he walk around with that stick, it ain't Andre 3K Think I won't drop the location? I still got PTSD Motherfuck the big three, nigga, it's just big me Nigga, bum, what? I'm really like that (he was once a thug, he was, he -) And your best work is a light pack (he was once a thug, he was, he -) Nigga, Prince outlive Mike Jack (he was once a thug, he was, he -) Nigga, bum, 'fore all your dogs gettin' buried (he was once a thug, he was, he -) That's a K with all these nines, he gon' see Pet Sematary (he was once a thug from around the way) Nigga, bum Young dope dealer, sellin' dope, is you like that? (If you like that, yeah, yeah) Kickin' doors, kickin' in doors, is you like that? (How?, yeah) Young throwed nigga, sellin' lows, is you like that? (Holy water, Holy water, yeah) All 24, you on go, is you like that? (If you like that) Niggas from the bottom really like that (if you like that) (he was once a thug, he was, he -) Steppin' in Balencis if you like that (if you like that) (he was once a thug, he was, he -) Pop another bottle if you like that (if you like that) (he was once a thug, he was, he -) (He was once a thug from around the way) Young dope dealer, sellin' dope, is you like that? Kickin' doors, kickin' in doors, is you like that? Young throwed nigga, sellin' lows, is you like that? All 24, you on go, is you like that? (If you like that) Niggas from the bottom really like that (if you like that) (he was once a thug, he was, he -) Steppin' in Balencis if you like that (if you like that) (he was once a thug, he was, he -) Pop another bottle if you like that (if you like that) (he was once a thug, he was, he -) (He was once a thug, he was, he -) Candy banging dope niggas was young, slangin' powder Walk in the strip club, make it rain for three hours Locked in and now I got my Phantom and my driver Perc'd out, took chances in my hood like Nevada Surfed out outside, white interior, lasagna Hundred thousands I just cashed out on designer Gotta devour, nigga, I learned that in the jungle Once I sell this low, that's a million in a week
                        </p>
                    </div>

                    {/* Comment Section */}
                    <div className="col-md-6">
                        {/* Social Media Style Comments */}
                        <div className="d-flex align-items-start mb-4">
                            <img
                                src="https://media.gettyimages.com/id/635359428/photo/new-york-ny-rumor-the-german-shepherd-poses-for-photos-after-winning-best-in-show-at-the.jpg?s=612x612&w=0&k=20&c=R8o1kV8KPl9z7QunBBgOHupjm_sY7n-U-7PFKKJZSC0="
                                alt="User Avatar"
                                className="small-avatar me-3"
                            />
                            <div className="border p-3 rounded w-100">
                                <p className="mb-1"><strong>dude1:</strong> I really felt where (s)he said __________. I think that means ______</p>
                                <small className="text-muted">5 minutes ago</small>
                            </div>
                        </div>
                        <div className="d-flex align-items-start mb-4">
                            <img
                                src="https://media.gettyimages.com/id/85438939/photo/a-soft-coated-wheaten-terrier-dog-named-zoey-waits-for-the-start-of-a-parade-at-the-woofstock.jpg?s=612x612&w=0&k=20&c=n644q3tfcbFR1qEPG51O15KUiF3pMrKl5zuIY4V7sjk="
                                alt="User Avatar"
                                className="small-avatar me-3"
                            />
                            <div className="border p-3 rounded w-100">
                                <p className="mb-1"><strong>dude2:</strong> I really felt where (s)he said __________. I think that means ______</p>
                                <small className="text-muted">10 minutes ago</small>
                            </div>
                        </div>
                        {/* Comment Form */}
                        <form>
                            <div className="form-group mb-3">
                                <textarea
                                    className="form-control"
                                    id="commentBox"
                                    name="commentBox"
                                    rows="4"
                                    placeholder="share what you think is behind the beat"
                                ></textarea>
                            </div>
                            <div className="text-center">
                                <input type="submit" className="btn btn-primary" value="Comment" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
