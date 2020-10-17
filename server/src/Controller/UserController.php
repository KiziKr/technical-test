<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class UserController extends AbstractController
{
    /**
     * @Route("/user", name="user", methods={"GET"})
     */
    public function find(UserRepository $userRepository)
    {
        return $this->json($userRepository->findAll(), 200);
    }
}
