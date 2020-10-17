<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

class AuthController extends AbstractController
{
    /**
     * @Route("/api/login", name="login", methods={"POST"})
     */
    public function login(Request $request)
    {
        $user = $this->getUser();

        if (!$this->isGranted('ROLE_USER')) {
            return $this->json([
                'error' => 'Invalid login'
            ], 400);
        }

        return $this->json($this->getUser() ? $this->getUser()->id: null);
    }
}
