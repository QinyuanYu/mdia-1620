// Welcome!
//
//                                                  #    #
//                                             %%% ##   ##
//                                          %%%%% ###%🎀###
//                                         %%%%% ### %%% #
//                                       %%%%%% ### %%% ###
//                                        %%%% ## %% #######
//                                       %%%%% # %% #@#####
//                                     %%%%%% # % #########
//                                    %%%%% ##### #########
//                          ###        %% ####### #########
//                 %%% ############    ########### ########
//              %%%% ############################### #######
//            %%%%% ################################## ######
//          %%%%%% #################################### #C###
//         %%%🌸%% #####################################  ###
//         %%%%% #######################################
//        %%%%%% ############### BEANS ##################
//     % %%%%%%% ############### BEANS ##################
//      %%%%%%%%% ############## BEANS ##################
//     %%%%%%%%%% ########################################
//  %%% %%%%%%%%   ###### ################################
//    %%%%%%%%      ###### #################### ##########
// % %%%🌸%%%%        ####### ########### ###### ##########
//  %%%%%%%%%         #######  ########### ###### ########
// %%%%%%%%%%          ##### ###  ######### ####### ######
//  %%%%%%%%%%          #### ##               ####### ####
//  %🌸%%%%%%%%%           ## #                  ##### ###
//   %%  %% % %%         # ##                      ## ###
//     %   %    %        # ###                      # ###
//                        # ###                     ## ###
//                        # ###                     ## ###
//                        # ####                   #### ##
//                       ### ###                  ##### ###
//                      ####  ###                 ####   ##
//                     #####   ###                 ##    ##
//                    #####    ####                      ###
//                     ##        ###                     ###
//                                ####                     ##
//                                 ####                    ###
//                                                         ####
//                                                          ##
//
// This is a template for your assignments and final project. You'll be setting up a stable and making
// sure it runs smoothly.
//
// Please do not create a new file for each assignment!
// Feel free to keep the headings (e.g.: "Variables"), but please delete any boilerplate
// comments. E.g.: those seen on lines 58 - 68, for example. They are usually providing directions. 
// (Your own comments, where necessary, are acceptable.)
//
// NOTE: UNLESS SPECIFIED, VARIABLE NAMING IS UP TO YOU. THERE SHOULD BE NO HARD-CODED
// NUMBERS OR STRINGS WHERE VARIBALES WOULD BE PREFERRED.



let doudou = {
    name: "DouDou",
    nickname: "Do",
    favoriteTreat: "apples",
    age: 5,
    monthlyFee: 1500,
    isHorseInside: false,
    dislikeFood: "carrot",
    skinColor: "white",
};

let mimi = {
    name: "MiMi",
    nickname: "Mi",
    favoriteTreat: "oranges",
    age: 6,
    monthlyFee: 1000,
    isHorseInside: false,
    dislikeFood: "cabbage",
    skinColor: "black",
};

let nini = {
    name: "NiNi",
    nickname: "Re",
    favoriteTreat: "grapes",
    age: 4,
    monthlyFee: 2000,
    isHorseInside: false,
    dislikeFood: "spinach",
    skinColor: "brown",
};

let stableName = "Happy Stable";

let horses = [doudou, mimi, nini];


let lala = {
    name: "LaLa",
    nickname: "La",
    favoriteTreat: "strawberry",
    age: 6,
    monthlyFee: 1200,
    isHorseInside: true,
    dislikeFood: "tomato",
    skinColor: "gray",
}

horses.push(lala);

horses[0].isHorseHungry = true;
horses[1].isHorseHungry = true;
horses[2].isHorseHungry = true;
horses[3].isHorseHungry = false;

//Horses inside the stall are eating, and they are not hungry.
//Horses outside the stall are running, and they are hungry.


let welcomeMessage = 
"Welcome to " + 
stableName + ". " + 
"Here are my horses: " + 
horses[0].name +
", " + 
horses[1].name + 
", " +
horses[2].name + 
", and " + 
horses[3].name +
"."

console.log(welcomeMessage)



let stallsNumber = 8;

function stallsAvailable(stallsEmpty){
    if(
    horses[0].isHorseInside == true && 
    horses[1].isHorseInside == true && 
    horses[2].isHorseInside == true && 
    horses[3].isHorseInside == true){
    console.log(stallsEmpty-4 + " stalls are available.")
    }

    else if(
    (horses[0].isHorseInside == true && horses[1].isHorseInside == true && horses[2].isHorseInside == true) ||
    (horses[0].isHorseInside == true && horses[1].isHorseInside == true && horses[3].isHorseInside == true) ||
    (horses[0].isHorseInside == true && horses[2].isHorseInside == true && horses[3].isHorseInside == true) ||
    (horses[1].isHorseInside == true && horses[2].isHorseInside == true && horses[3].isHorseInside == true) ){
        console.log(stallsEmpty-3 + " stalls are available now.")
    }

    else if(
    (horses[0].isHorseInside == true && horses[1].isHorseInside == true) ||
    (horses[0].isHorseInside == true && horses[2].isHorseInside == true) ||
    (horses[0].isHorseInside == true && horses[3].isHorseInside == true) ||
    (horses[1].isHorseInside == true && horses[2].isHorseInside == true) ||
    (horses[1].isHorseInside == true && horses[3].isHorseInside == true) ||
    (horses[2].isHorseInside == true && horses[3].isHorseInside == true) ){
        console.log(stallsEmpty - 2 + " stalls are available now.")
    }

    else if(
    horses[0].isHorseInside == true ||
    horses[1].isHorseInside == true ||
    horses[2].isHorseInside == true ||
    horses[3].isHorseInside == true ){
        console.log(stallsEmpty - 1 + " stalls are available now.")
    }

    else{
        console.log(stallsEmpty + " stalls are available now.")
    }
}

stallsAvailable(stallsNumber);

function latePayment(horse){
console.log(
"I'm sorry to inform you that the monthly payment for " +
horse.name + 
" is late. Please pay " + 
horse.monthlyFee*1.2 + 
" dollars."
) 
}

latePayment(horses[0]);

function horseNickname(horse){
    return horse.nickname
}

if(horses[0].isHorseHungry == true) {
    console.log(horseNickname(horses[0]) + 
    " is hungry and waiting for her lunch."
)
}
else{
    console.log(horseNickname(horses[0]) +
    " is eating " + 
    horses[0].favoriteTreat + "."
)
}
