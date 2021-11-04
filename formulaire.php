<?php
require_once 'config.php';

$firstname = isset($_POST["firstname"]) ? $_POST['firstname'] : null;
$lastname = isset($_POST["lastname"]) ? $_POST['lastname'] : null;
$age = isset($_POST["age"]) ? $_POST['age'] : null;
$adresse = isset($_POST["address"]) ? $_POST['address'] : null;
$type_person = isset($_POST["person_type"]) ? $_POST["person_type"] : null;

if ( empty($firstname) || empty($lastname) || empty($age) || empty($adresse) || empty($type_person) ) {
    die('Il manque un champ à completer');
}
else {
    print("TOP! Ma ligne est enregistrée");
}
$stmt = $pdo->prepare("INSERT INTO `personne` (`prenom`, `nom` , `age`, `adresse`, `type`) VALUES (:firstname, :lastname, :age, :adresse, :type_person)");
$stmt->execute(['firstname' => $firstname , 'lastname' => $lastname, 'age' => $age, 'adresse' => $adresse, 'type_person' => $type_person,]);


$name = "toto";
echo '$name';


function strtouppercase($parametre1) {
    $return = strtoupper($parametre1);
    return   $return;
}

$resultat = strtouppercase($name);

