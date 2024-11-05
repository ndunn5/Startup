import React from 'react';

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
                                <input type="submit" className="btn btn-primary" value="Comment" />
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
//Billie Eilish
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
    return (
        <>
            <header className="py-5">
                <div className="container text-center text-white">
                    <h1 className="fw-bold" style={{ fontSize: '2rem' }}>BLUE by Billie Eilish</h1>
                </div>
            </header>
    
            {/* Main Content: Lyrics and Comment Section */}
            <div className="container my-5">
                <div className="row">
                    {/* Song Lyrics Section */}
                    <div className="col-md-6">
                        <p className="text-center">Mm, mm, mm 
                    I try to live in black and white, but I'm so blue 
                    I'd like to mean it when I say I'm over you 
                    But that's still not true (blue) 
                    And I'm still so blue, oh 
                    I thought we were the same (I thought we were the same) 
                    Birds of a feather (birds of a feather), now I'm ashamed 
                    I told you a lie, désolé, mon amour 
                    I'm trying my best, don't know what's in store 
                    Open up the door (blue) 
                    In the back of my mind, I'm still overseas 
                    A bird in a cage, thought you were made for me 
                    I try (I'm not what) to live in black and white, but I'm so blue 
                    I'd like to mean it when I say I'm over you 
                    But that's still not true, true 
                    And I'm still so blue 
                    I'm true blue, true blue 
                    I'm true blue 
                    mm, mm, mm 
                    Ah-ah 
                    Ah-ah-ah-ah 
                    Ah-ah 
                    You were born bluer than a butterfly 
                    Beautiful and so deprived of oxygen 
                    Colder than your father's eyes 
                    He never learned to sympathize with anyone 
                    I don't blame you 
                    But I can't change you
                    Don't hate you (don't hate you)
                    But we can't save you (but we can't save you)
                    You were born reaching for your mother's hands
                    Victim of your father's plans to rule the world
                    Too afraid to step outside
                    Paranoid and petrified of what you've heard
                    But they could say the same 'bout me
                    I sleep 'bout three hours each night
                    Means only 21 a week now, now
                    And I could say the same 'bout you
                    Born blameless, grew up famous too
                    Just a baby born blue now, now
                    I don't blame you
                    But I can't change you
                    Don't hate you
                    But we can't save you
                    Ooh-ooh
                    It's over now
                    It's over now
                    It's over now
                    (Ah-ah-ah, ah)
                    But when can I hear the next one?
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
        <main>Not Like US</main>
    );
};

export const MoneyTrees = () => {
    return (
        <main>Money Trees</main>
    );
};

export const LikeThat = () => {
    return (
        <main>like that</main>
    );
};