<?php
require_once 'config.php';

if (empty($_POST['username'])) {
    throw new Exception('Ma variable username est vide');
}

$username = isset($_POST["username"]) ? $_POST['username'] : null;

$password = $_POST["password"];

if ( isset($password) ) {
    $password = $password ;
} else {
    $password = null;
}

$email = $_POST["email"];

$stmt = $pdo->prepare("INSERT INTO `users` (`username` ,`password`, `email`) VALUES (:username, :mdp, :email)");
$stmt->execute(['username' => $username , 'mdp' => $password, ':email' => $email,]);


