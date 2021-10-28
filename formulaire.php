<?php
require_once 'config.php';

$username = $_POST["username"];
$password = $_POST["password"];
$email = $_POST["email"];

$stmt = $pdo->prepare("INSERT INTO `users` (`username` ,`password`, `email`) VALUES (:username, :mdp, :email)");
$stmt->execute(['username' => $username , 'mdp' => $password, ':email' => $email,]);


