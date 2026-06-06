var songs = [
"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
];

var names = [
    "Perfect",
    "Believer",
    "Closer",
    "Circles",
    "Shape Of You"
];

var artists = [
    "Ed Sheeran",
    "Imagine Dragons",
    "The Chainsmokers",
    "Post Malone",
    "Ed Sheeran"
];

var images = [
    "https://picsum.photos/100?1",
    "https://picsum.photos/100?2",
    "https://picsum.photos/100?3",
    "https://picsum.photos/100?4",
    "https://picsum.photos/100?5"
];

var likes = 0;

function playSong(num)
{
    document.getElementById("audio").src = songs[num];

    document.getElementById("songtitle").innerHTML =
    names[num];

    document.getElementById("artist").innerHTML =
    artists[num];

    document.getElementById("cover").src =
    images[num];
}

function likeSong()
{
    likes++;

    document.getElementById("likes").innerHTML =
    likes;
}


