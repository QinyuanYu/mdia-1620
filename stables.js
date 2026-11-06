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
    favoriteTreat: "🍎apples",
    age: 5,
    monthlyFee: 1500,
    isHorseInside: false,
    dislikeFood: "carrot",
    skinColor: "white",
};

let mimi = {
    name: "MiMi",
    nickname: "Mi",
    favoriteTreat: "🍊oranges",
    age: 6,
    monthlyFee: 1000,
    isHorseInside: false,
    dislikeFood: "cabbage",
    skinColor: "black",
};

let nini = {
    name: "NiNi",
    nickname: "Re",
    favoriteTreat: "🍇grapes",
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
    favoriteTreat: "🍓strawberry",
    age: 6,
    monthlyFee: 1200,
    isHorseInside: true,
    dislikeFood: "tomato",
    skinColor: "gray",
}

horses.push(lala);

for (const horse of horses){
    horse.isHungry = false;
}


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


//horses, totalStalls are variables.
//allStalls, allHorses are parameters.

let totalStalls = 8;

function stallsAvailable(allStalls, allHorses){
    return allStalls - allHorses;
}

console.log(
    "There are " + 
    stallsAvailable(totalStalls, horses.length) + 
    " stalls available."
)


let latePaymentRate = 1.2;

function latePayment(monthlyFee, latePaymentRate){
    return monthlyFee * latePaymentRate
}

console.log(
"I'm sorry to inform you that the monthly payment for " +
horses[0].name + 
" is late. Please pay " + 
latePayment(horses[0].monthlyFee, latePaymentRate) + 
" dollars.")


function horseNickname(horse){
    return horse.nickname
}

console.log(horseNickname(horses[0]))

function whoLikesThisTreat(allHorses){
for (const myHorse of allHorses){
    if(myHorse.favoriteTreat == "🍊oranges"){
        console.log(myHorse.name + " likes 🍊oranges!")
        return myHorse.name
    }else{
        console.log(myHorse.name +  " doesn't like this treat.")
    }
}
}

whoLikesThisTreat(horses);


function horseSkinColor(allHorses){
    for(const horse of allHorses){
        console.log(horse.name + "'s skin color is " + horse.skinColor)
    }
}

horseSkinColor(horses);