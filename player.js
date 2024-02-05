const playlistOne = {
    images: 'assets/images/Rectangle-1.png',
    name: 'Hip-Hop Hits',
    info: '4 tracks, 12m 13s',
    listArtist: 'Eminem, 50cent, Lloyd Banks and others',
    tracks: [
        {
            track: 'assets/sound/Eminem_-_Rap_God.mp3',
            artist: 'Eminem',
            name: 'Rap God',
            img: 'assets/images/Eminem.png',
        },
        {
            track: 'assets/sound/50_cent_-_In_da_Club.mp3',
            artist: '50 cent',
            name: 'In da Club',
            img: 'assets/images/50_cent.png',
        },
        {
            track: 'assets/sound/DMX_-_X_Gon_Give_It_To_Ya.mp3',
            artist: 'DMX',
            name: 'X Gon Give It To Ya',
            img: 'assets/images/DMX.png',
        },
        {
            track: 'assets/sound/50_Cent-You_Donapost_Know_(Feat._Eminem_LLoyd_Banks_amp_Cashis).mp3',
            artist: '50 Cent feat Eminem',
            name: 'You Donapost Know',
            img: 'assets/images/feat.png',
        },
    ],
};

const playlistTwo = {
    images: 'assets/images/Rectangle-2.png',
    name: 'Rap Hits 1990s',
    info: '4 tracks, 12m 13s',
    listArtist: 'Eminem, 50cent, Lloyd Banks and others',
    tracks: [
        {
            track: 'assets/sound/playlistTwo/Public_Enemy_-_Fight_the_Power.mp3',
            artist: 'Public Enemy',
            name: 'Fight the Power',
            img: 'assets/images/playlistTwo/trackOne.png',
        },
        {
            track: 'assets/sound/playlistTwo/Vanila_Ice_-_Ice_Ice_Baby.mp3',
            artist: 'Vanila Ice',
            name: 'Ice Ice Baby',
            img: 'assets/images/playlistTwo/trackTwo.png',
        },
        {
            track: 'assets/sound/playlistTwo/MC_Hammer_-_You_Can’t_Touch_This.mp3',
            artist: 'MC Hammer',
            name: 'You Can’t Touch This',
            img: 'assets/images/playlistTwo/trackThree.png',
        },
        {
            track: 'assets/sound/playlistTwo/Brand_Nubian_-_Brand_Nubian.mp3',
            artist: 'Brand Nubian',
            name: 'Brand Nubian',
            img: 'assets/images/playlistTwo/trackFour.png',
        },
    ],
};

document.addEventListener('DOMContentLoaded', function () {
    const sectionElement = document.querySelector('.section');
    const buttonCreatePlaylistElement = document.querySelector(
        '.buttonCreatePlaylist'
    );

    buttonCreatePlaylistElement.addEventListener('click', function () {
        buttonCreatePlaylistElement.classList.add('fadeOut');

        setTimeout(function () {
            buttonCreatePlaylistElement.classList.add('disable');

            const formCreatePlaylist = document.createElement('form');
            formCreatePlaylist.classList.add('formCreatePlaylist');

            const h2Element = document.createElement('h2');
            h2Element.classList.add('titleForm');
            h2Element.append('Playlists of the week');
            //----------------------------------------------------------------
            const divFormElement = document.createElement('div');
            divFormElement.classList.add('containerFormImg');
            //----------------------------------------------------------------
            const playlistOneElement = document.createElement('div');
            pl = playlistOneElement;
            const playlistTwoElement = document.createElement('div');
            playlistOneElement.classList.add('formPlaylist');

            playlistTwoElement.classList.add('formPlaylist');
            //---------------------------------------------------------------
            const imgFormElementOne = document.createElement('img');
            const imgFormElementTwo = document.createElement('img');
            imgFormElementOne.classList.add('imgForm');
            imgFormElementOne.src = 'assets/images/Rectangle-1.png';

            imgFormElementTwo.classList.add('imgForm');
            imgFormElementTwo.src = 'assets/images/Rectangle-2.png';
            //-----------------------------------------------------------------
            const infoPlaylistElementOne = document.createElement('div');
            const infoPlaylistElementTwo = document.createElement('div');
            infoPlaylistElementOne.classList.add('infoPlaylist');

            infoPlaylistElementTwo.classList.add('infoPlaylist');
            //----------------------------------------------------------------
            const titleInfoElementOne = document.createElement('span');
            const titleInfoElementTwo = document.createElement('span');

            titleInfoElementOne.classList.add('titleInfo');
            titleInfoElementOne.append('Playlist');

            titleInfoElementTwo.classList.add('titleInfo');
            titleInfoElementTwo.append('Playlist');

            //----------------------------------------------------------------
            const namePlaylistElementOne = document.createElement('h1');
            const namePlaylistElementTwo = document.createElement('h1');

            namePlaylistElementOne.classList.add('namePlaylist');
            namePlaylistElementOne.append(playlistOne.name);

            namePlaylistElementTwo.classList.add('namePlaylist');
            namePlaylistElementTwo.append(playlistTwo.name);

            //----------------------------------------------------------------
            const infoPlaylistOneElement = document.createElement('span');
            const infoPlaylistTwoElement = document.createElement('span');

            infoPlaylistOneElement.classList.add('infoSpanPlaylist');
            infoPlaylistTwoElement.classList.add('infoSpanPlaylist');

            infoPlaylistOneElement.append(playlistOne.info);
            infoPlaylistTwoElement.append(playlistTwo.info);

            //----------------------------------------------------------------

            const listArtistElementOne = document.createElement('span');
            const listArtistElementTwo = document.createElement('span');

            listArtistElementOne.classList.add('listArtist');
            listArtistElementTwo.classList.add('listArtist');

            listArtistElementOne.append(
                'Eminem, 50cent, Lloyd Banks and others'
            );
            listArtistElementTwo.append(
                'Eminem, 50cent, Lloyd Banks and others'
            );
            //----------------------------------------------------------------
            const buttonFormElement = document.createElement('button');
            buttonFormElement.type = 'submit';
            buttonFormElement.classList.add('buttonForm');
            buttonFormElement.append('Create a new playlist');
            //-----------------------------------------------------------------

            infoPlaylistElementOne.append(titleInfoElementOne);
            infoPlaylistElementTwo.append(titleInfoElementTwo);

            infoPlaylistElementOne.append(namePlaylistElementOne);
            infoPlaylistElementTwo.append(namePlaylistElementTwo);

            infoPlaylistElementOne.append(infoPlaylistOneElement);
            infoPlaylistElementTwo.append(infoPlaylistTwoElement);

            infoPlaylistElementOne.append(listArtistElementOne);
            infoPlaylistElementTwo.append(listArtistElementTwo);

            playlistOneElement.append(imgFormElementOne);
            playlistTwoElement.append(imgFormElementTwo);
            playlistOneElement.append(infoPlaylistElementOne);
            playlistTwoElement.append(infoPlaylistElementTwo);

            divFormElement.append(playlistOneElement);
            divFormElement.append(playlistTwoElement);

            formCreatePlaylist.append(h2Element);
            formCreatePlaylist.append(divFormElement);
            formCreatePlaylist.append(buttonFormElement);

            sectionElement.append(formCreatePlaylist);

            formCreatePlaylist.classList.add('fadeIn');
            //--------------------------------------------------------

            playlistOneElement.addEventListener('click', function () {
                formCreatePlaylist.classList.remove('fadeIn');
                formCreatePlaylist.classList.remove('formCreatePlaylist');
                formCreatePlaylist.classList.add('fadeOut');
                formCreatePlaylist.classList.add('disable');

                setTimeout(function playlistLayout() {
                    const playlist_1 = document.createElement('div');
                    playlist_1.classList.add('playlist');
                    //-----------------------------------------------------------------------
                    const oneBlocElement = document.createElement('div');
                    oneBlocElement.classList.add('oneBloc');

                    const imgElement = document.createElement('img');
                    imgElement.classList.add('mainImg');
                    const infoBlocElement = document.createElement('div');
                    infoBlocElement.classList.add('infoBloc');
                    const titleInfoElement = document.createElement('span');
                    titleInfoElement.classList.add('titleInfo');
                    const namePlaylistElement = document.createElement('h1');
                    namePlaylistElement.classList.add('namePlaylist');
                    const infoElement = document.createElement('span');
                    infoElement.classList.add('infoElement');
                    const listArtistElement = document.createElement('span');
                    listArtistElement.classList.add('listArtist');
                    //-----------------------------------------------------------------------

                    const twoBlocElement = document.createElement('div');
                    twoBlocElement.classList.add('twoBloc');

                    const oneTrackContainerElement =
                        document.createElement('div');
                    oneTrackContainerElement.classList.add('trackContainer');
                    const twoTrackContainerElement =
                        document.createElement('div');
                    twoTrackContainerElement.classList.add('trackContainer');
                    const threeTrackContainerElement =
                        document.createElement('div');
                    threeTrackContainerElement.classList.add('trackContainer');
                    const fourTrackContainerElement =
                        document.createElement('div');
                    fourTrackContainerElement.classList.add('trackContainer');

                    const imgOneTrackElement = document.createElement('img');
                    const imgTwoTrackElement = document.createElement('img');
                    const imgThreeTrackElement = document.createElement('img');
                    const imgFourTrackElement = document.createElement('img');

                    const oneTrackElement = document.createElement('div');
                    oneTrackElement.classList.add('trackElement');
                    const twoTrackElement = document.createElement('div');
                    twoTrackElement.classList.add('trackElement');
                    const threeTrackElement = document.createElement('div');
                    threeTrackElement.classList.add('trackElement');
                    const fourTrackElement = document.createElement('div');
                    fourTrackElement.classList.add('trackElement');

                    const oneNameTrackElement = document.createElement('span');
                    oneNameTrackElement.classList.add('nameTrack');
                    const twoNameTrackElement = document.createElement('span');
                    twoNameTrackElement.classList.add('nameTrack');
                    const threeNameTrackElement =
                        document.createElement('span');
                    threeNameTrackElement.classList.add('nameTrack');
                    const fourNameTrackElement = document.createElement('span');
                    fourNameTrackElement.classList.add('nameTrack');

                    const oneAudioElement = document.createElement('audio');
                    oneAudioElement.classList.add('audio');
                    const twoAudioElement = document.createElement('audio');
                    const threeAudioElement = document.createElement('audio');
                    const fourAudioElement = document.createElement('audio');
                    //----------------------------------------------------------------------
                    imgElement.src = playlistOne.images;
                    imgOneTrackElement.src = playlistOne.tracks[0].img;
                    imgTwoTrackElement.src = playlistOne.tracks[1].img;
                    imgThreeTrackElement.src = playlistOne.tracks[2].img;
                    imgFourTrackElement.src = playlistOne.tracks[3].img;
                    //----------------------------------------------------------------------

                    sectionElement.append(playlist_1);
                    //--------------------------------------------------------------------
                    playlist_1.append(oneBlocElement);

                    oneBlocElement.append(imgElement);
                    oneBlocElement.append(infoBlocElement);
                    titleInfoElement.append('Playlist');
                    infoBlocElement.append(titleInfoElement);
                    namePlaylistElement.append(playlistOne.name);
                    infoBlocElement.append(namePlaylistElement);
                    infoElement.append(playlistOne.info);
                    infoBlocElement.append(infoElement);
                    listArtistElement.append(playlistOne.listArtist);
                    infoBlocElement.append(listArtistElement);
                    //-----------------------------------------------------------------------
                    playlist_1.append(twoBlocElement);

                    twoBlocElement.append(oneTrackContainerElement);
                    oneTrackContainerElement.append(imgOneTrackElement);
                    oneTrackContainerElement.append(oneTrackElement);
                    oneTrackElement.append(oneNameTrackElement);
                    oneNameTrackElement.append(
                        `${playlistOne.tracks[0].artist} - ${playlistOne.tracks[0].name}`
                    );
                    oneTrackElement.append(oneAudioElement);
                    oneAudioElement.src = playlistOne.tracks[0].track;
                    oneAudioElement.controls = true;

                    twoBlocElement.append(twoTrackContainerElement);
                    twoTrackContainerElement.append(imgTwoTrackElement);
                    twoTrackContainerElement.append(twoTrackElement);
                    twoTrackElement.append(twoNameTrackElement);
                    twoNameTrackElement.append(
                        `${playlistOne.tracks[1].artist} - ${playlistOne.tracks[1].name}`
                    );
                    twoTrackElement.append(twoAudioElement);
                    twoAudioElement.src = playlistOne.tracks[1].track;
                    twoAudioElement.controls = true;

                    twoBlocElement.append(threeTrackContainerElement);
                    threeTrackContainerElement.append(imgThreeTrackElement);
                    threeTrackContainerElement.append(threeTrackElement);
                    threeTrackElement.append(threeNameTrackElement);
                    threeNameTrackElement.append(
                        `${playlistOne.tracks[2].artist} - ${playlistOne.tracks[2].name}`
                    );
                    threeTrackElement.append(threeAudioElement);
                    threeAudioElement.src = playlistOne.tracks[2].track;
                    threeAudioElement.controls = true;

                    twoBlocElement.append(fourTrackContainerElement);
                    fourTrackContainerElement.append(imgFourTrackElement);
                    fourTrackContainerElement.append(fourTrackElement);
                    fourTrackElement.append(fourNameTrackElement);
                    fourNameTrackElement.append(
                        `${playlistOne.tracks[3].artist} - ${playlistOne.tracks[3].name}`
                    );
                    fourTrackElement.append(fourAudioElement);
                    fourAudioElement.src = playlistOne.tracks[3].track;
                    fourAudioElement.controls = true;
                }, 500);
            });

            playlistTwoElement.addEventListener('click', function () {
                formCreatePlaylist.classList.remove('fadeIn');
                formCreatePlaylist.classList.remove('formCreatePlaylist');
                formCreatePlaylist.classList.add('fadeOut');
                formCreatePlaylist.classList.add('disable');

                setTimeout(function playlistLayout() {
                    const playlist_1 = document.createElement('div');
                    playlist_1.classList.add('playlist');
                    //-----------------------------------------------------------------------
                    const oneBlocElement = document.createElement('div');
                    oneBlocElement.classList.add('oneBloc');

                    const imgElement = document.createElement('img');
                    imgElement.classList.add('mainImg');
                    const infoBlocElement = document.createElement('div');
                    infoBlocElement.classList.add('infoBloc');
                    const titleInfoElement = document.createElement('span');
                    titleInfoElement.classList.add('titleInfo');
                    const namePlaylistElement = document.createElement('h1');
                    namePlaylistElement.classList.add('namePlaylist');
                    const infoElement = document.createElement('span');
                    infoElement.classList.add('infoElement');
                    const listArtistElement = document.createElement('span');
                    listArtistElement.classList.add('listArtist');
                    //-----------------------------------------------------------------------

                    const twoBlocElement = document.createElement('div');
                    twoBlocElement.classList.add('twoBloc');

                    const oneTrackContainerElement =
                        document.createElement('div');
                    oneTrackContainerElement.classList.add('trackContainer');
                    const twoTrackContainerElement =
                        document.createElement('div');
                    twoTrackContainerElement.classList.add('trackContainer');
                    const threeTrackContainerElement =
                        document.createElement('div');
                    threeTrackContainerElement.classList.add('trackContainer');
                    const fourTrackContainerElement =
                        document.createElement('div');
                    fourTrackContainerElement.classList.add('trackContainer');

                    const imgOneTrackElement = document.createElement('img');
                    const imgTwoTrackElement = document.createElement('img');
                    const imgThreeTrackElement = document.createElement('img');
                    const imgFourTrackElement = document.createElement('img');

                    const oneTrackElement = document.createElement('div');
                    oneTrackElement.classList.add('trackElement');
                    const twoTrackElement = document.createElement('div');
                    twoTrackElement.classList.add('trackElement');
                    const threeTrackElement = document.createElement('div');
                    threeTrackElement.classList.add('trackElement');
                    const fourTrackElement = document.createElement('div');
                    fourTrackElement.classList.add('trackElement');

                    const oneNameTrackElement = document.createElement('span');
                    oneNameTrackElement.classList.add('nameTrack');
                    const twoNameTrackElement = document.createElement('span');
                    twoNameTrackElement.classList.add('nameTrack');
                    const threeNameTrackElement =
                        document.createElement('span');
                    threeNameTrackElement.classList.add('nameTrack');
                    const fourNameTrackElement = document.createElement('span');
                    fourNameTrackElement.classList.add('nameTrack');

                    const oneAudioElement = document.createElement('audio');
                    oneAudioElement.classList.add('audio');
                    const twoAudioElement = document.createElement('audio');
                    const threeAudioElement = document.createElement('audio');
                    const fourAudioElement = document.createElement('audio');
                    //----------------------------------------------------------------------
                    imgElement.src = playlistTwo.images;
                    imgOneTrackElement.src = playlistTwo.tracks[0].img;
                    imgTwoTrackElement.src = playlistTwo.tracks[1].img;
                    imgThreeTrackElement.src = playlistTwo.tracks[2].img;
                    imgFourTrackElement.src = playlistTwo.tracks[3].img;
                    //----------------------------------------------------------------------

                    sectionElement.append(playlist_1);
                    //--------------------------------------------------------------------
                    playlist_1.append(oneBlocElement);

                    oneBlocElement.append(imgElement);
                    oneBlocElement.append(infoBlocElement);
                    titleInfoElement.append('Playlist');
                    infoBlocElement.append(titleInfoElement);
                    namePlaylistElement.append(playlistTwo.name);
                    infoBlocElement.append(namePlaylistElement);
                    infoElement.append(playlistTwo.info);
                    infoBlocElement.append(infoElement);
                    listArtistElement.append(playlistTwo.listArtist);
                    infoBlocElement.append(listArtistElement);
                    //-----------------------------------------------------------------------
                    playlist_1.append(twoBlocElement);

                    twoBlocElement.append(oneTrackContainerElement);
                    oneTrackContainerElement.append(imgOneTrackElement);
                    oneTrackContainerElement.append(oneTrackElement);
                    oneTrackElement.append(oneNameTrackElement);
                    oneNameTrackElement.append(
                        `${playlistTwo.tracks[0].artist} - ${playlistTwo.tracks[0].name}`
                    );
                    oneTrackElement.append(oneAudioElement);
                    oneAudioElement.src = playlistTwo.tracks[0].track;
                    oneAudioElement.controls = true;

                    twoBlocElement.append(twoTrackContainerElement);
                    twoTrackContainerElement.append(imgTwoTrackElement);
                    twoTrackContainerElement.append(twoTrackElement);
                    twoTrackElement.append(twoNameTrackElement);
                    twoNameTrackElement.append(
                        `${playlistTwo.tracks[1].artist} - ${playlistTwo.tracks[1].name}`
                    );
                    twoTrackElement.append(twoAudioElement);
                    twoAudioElement.src = playlistTwo.tracks[1].track;
                    twoAudioElement.controls = true;

                    twoBlocElement.append(threeTrackContainerElement);
                    threeTrackContainerElement.append(imgThreeTrackElement);
                    threeTrackContainerElement.append(threeTrackElement);
                    threeTrackElement.append(threeNameTrackElement);
                    threeNameTrackElement.append(
                        `${playlistTwo.tracks[2].artist} - ${playlistTwo.tracks[2].name}`
                    );
                    threeTrackElement.append(threeAudioElement);
                    threeAudioElement.src = playlistTwo.tracks[2].track;
                    threeAudioElement.controls = true;

                    twoBlocElement.append(fourTrackContainerElement);
                    fourTrackContainerElement.append(imgFourTrackElement);
                    fourTrackContainerElement.append(fourTrackElement);
                    fourTrackElement.append(fourNameTrackElement);
                    fourNameTrackElement.append(
                        `${playlistTwo.tracks[3].artist} - ${playlistTwo.tracks[3].name}`
                    );
                    fourTrackElement.append(fourAudioElement);
                    fourAudioElement.src = playlistTwo.tracks[3].track;
                    fourAudioElement.controls = true;
                }, 500);
            });
        }, 500);
    });
});
