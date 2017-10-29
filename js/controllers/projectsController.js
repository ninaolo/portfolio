app.controller('projectsController', ['$scope', '$routeParams', function ($scope, $routeParams) {

    $scope.project = {};

    $scope.products = [

        {
            'id': 1,
            'name': 'Meeter',
            'img_cover': 'images/meeter_cover.png',
            'info': 'A meeting agenda builder',
            'description': 'Meeter is an office platform and meeting agenda builder. The point is to create meeting ' +
            'agendas and share these with your colleagues. The meetings can also be connected to Google Calendar and' +
            ' all attendees will get email invitations. Meeter also makes it possible for colleagues to edit and ' +
            'collaborate on an agenda\'s activities and specifications together. The project was made in ' +
            'collaboration with one other student in an interaction programming course at KTH',
            'link_1': 'https://github.com/ninaolo/DH2642-project',
            'link_desc': 'Check out the code on Github',
            'process_1': 'The interaction programming process began with programming a half-working product which' +
            'could be shown to others for feedback. Focus was put on showing the purpose of the webpage and not' +
            'have all functions work exactly as they should. Others then gave feedback on the interaction' +
            'with the user and suggested improvements.',
            'process_img_1': 'images/meeter_process.png',
            'process_2': 'One tricky thing was getting the actual meeting agenda builder to work in a user-friendly' +
            ' way with drag and drop. Getting the actual drag and drop to work was not too difficult, but getting it' +
            ' to work in a way which felt intuitive and easy for the user was more tricky. When dragging, the user ' +
            'wants to see where the dragged object is going to end up, for example, which was indicated by moving ' +
            'the other objects aside to make room for the new one. Putting objects between each other also had to' +
            ' be supported.',
            'process_img_2': 'images/meeter_3.png',
            'process_3': 'The finished Meeter webpage has a login/logout function, a profile, a meeting agenda ' +
            'builder, a view to see all colleagues\' profiles and so on. The backend was written in PHP Laravel ' +
            'and contained a REST API which was used by the frontend, written in AngularJs.',
            'process_img_3': 'images/meeter_2.png'
        },

        {
            'id': 2,
            'name': 'Habiter',
            'img_cover': 'images/habiter_1.png',
            'info': 'An IoT habit visualizer',
            'description': 'What would you discover about your life if your habits, movements and patterns were ' +
            'visualized for you? Habiter is a prototype of an \'Internet of Things\' product which connects to ' +
            '\'things\', such as your TV or bed, and creates visualization with colors and shapes as a background ' +
            'image of your device. Since it always would be there, you could slowly make interesting observations' +
            ' about your life.',
            'link_1': 'https://www.youtube.com/watch?v=SIH03IFkUTs',
            'link_desc': 'Check out a video I made about the project',
            'process_1': 'The interaction design process began with paper prototyping. The point was to quickly ' +
            'get something which I could show to others and get feedback on. In the beginning, the idea was ' +
            'to generate daily art paintings which could be logged somewhere to look at. However, the after some ' +
            'feedback I realized that the user might not want to actively seek this information, but it should ' +
            'instead be visible all the time. Therefore, the habiter visualization shows up as a background image' +
            ' of the user\'s device, constantly changing in shapes and colors.',
            'process_img_1': 'images/habiter_process.png',
            'process_2': 'One tricky thing was to understand how the user would understand which object is ' +
            'connected with which pattern or color in the visualization. The end result, after some feedback,' +
            ' was a composition which the user can set up with different devices. The user can then click these ' +
            'devices or objects and get information about what pattern or color it will generate.',
            'process_img_2': 'images/habiter_3.png',
            'process_3': 'The finished habiter prototype was made in the Justinmind prototyping tool. A video of ' +
            'both the concept and the Justinmind prototype was also made to show others the work. The picture ' +
            'below shows what the visualization could look like, with three different connected objects.',
            'process_img_3': 'images/habiter_4.png'
        },

        {
            'id': 3,
            'name': 'Battleship',
            'img_cover': 'images/battleship_cover.png',
            'info': 'A JavaScript game of Battleship',
            'description': 'This project was about writing a simple game of Battleship with intuitive interaction ' +
            'design and instant feedback to the user. Focus was mostly on interaction programming but also a bit ' +
            'on making a simple and nice design.',
            'link_1': 'http://wproj-vt16.csc.kth.se/~ninaolo/battleship/',
            'link_desc': 'Bored? Perhaps you want to play some Battleship!',
            'link_2': 'https://github.com/ninaolo/battleship',
            'process_1': 'The process began with designing the shooting and programming the algorithms which would ' +
            'understand if a shoot was a hit or a miss.',
            'process_img_1': 'images/battleship_2.png',
            'process_2': 'The trickiest part was the placement of the ships and to create the nice hover effect ' +
            'which is seen when a user moves a ship over the board to place it.',
            'process_img_2': 'images/battleship_1.png',
            'process_3': 'The finished Battleship webpage was made with plain Javascript and jQuery and Bootstrap ' +
            'was also used to simplify designing the webpage. It allows the user to place ships and another user to ' +
            'try and shoot them down, or to play against a computer which randomly places the ships. The played ' +
            'games are shown in an area.',
            'process_img_3': 'images/battleship_cover.png'
        },
        {
            'id': 4,
            'name': 'House Purchasing Webpage',
            'img_cover': 'images/house_cover.png',
            'info': 'A webpage for purchasing houses',
            'description': 'This project was about writing a simple house purchasing webpage. The focus was mostly on ' +
            'interaction programming but also a bit on making a simple and nice design.',
            'link_1': 'http://wproj-vt16.csc.kth.se/~ninaolo/intnet/house-purchasing-webpage/index.php',
            'link_desc': 'Here\'s the link to the webpage and the code on Github',
            'link_2': 'https://github.com/ninaolo/house-purchasing-webpage',
            'process_1': 'The process began with fixing the database with mocked houses and descriptions and also ' +
            'trying to come up with a good design for the webpage. The whole project was quite straightforward, ' +
            'and it was a small lab in one of my courses at KTH.',
            'process_img_1': 'images/house_3.png',
            'process_2': 'The process included fixing search parameters where the user can limit the search, and also ' +
            'buttons to choose in which order the results should be shown.',
            'process_img_2': 'images/house_1.png',
            'process_3': 'The finished house purchasing webpage was made with plain Javascript and jQuery and Bootstrap ' +
            'was also used to simplify designing the webpage. It basically allows the user to search for houses, and ' +
            'that\'s it.',
            'process_img_3': 'images/house_2.png'
        }
    ];

    $scope.getProject = function () {
        for (var i = 0; i < $scope.products.length; i++) {
            if ($scope.products[i].id == $routeParams.id) {
                $scope.project = $scope.products[i];
                console.log($scope.products[i]);
            }
        }
    }

}]);