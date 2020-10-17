<?php

namespace App\DataFixtures;

use App\Entity\User;
use App\Entity\UserSheet;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Faker;

class AppFixtures extends Fixture
{
    private $encoder;

    public function __construct(UserPasswordEncoderInterface $encoder) {
        $this->encoder = $encoder;
    }

    public function load(ObjectManager $manager)
    {
        $faker = Faker\Factory::create('fr_FR');

        for ($i = 0; $i <= 5; $i ++) {
            $user = new User();
            $user->setEmail($faker->email);
            $user->setPassword($this->encoder->encodePassword($user, '1234'));
            $manager->persist($user);

            $userSheet = new UserSheet();
            $userSheet->setFirstName($faker->firstName());
            $userSheet->setLastName($faker->lastName);
            $userSheet->setDescription('Description');
            $userSheet->setPhone($faker->phoneNumber);
            $userSheet->setUser($user);
            $manager->persist($userSheet);
        }

        $manager->flush();
    }
}
