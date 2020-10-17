<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $faker = Faker\Factory::create('fr_FR');

        for ($i = 0; $i <= 5; $i ++) {
            $user = new User();
            $user->setEmail($faker->email);
            $user->setPassword('1234');
            $manager->persist($user);
        }

        $manager->flush();
    }
}
