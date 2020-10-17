<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class UserController extends AbstractController
{
    /**
     * @Route("/user", name="user_find", methods={"GET"})
     */
    public function find(UserRepository $userRepository)
    {
        return $this->json($userRepository->findAll(), 200, [], ['groups' => 'user:read']);
    }

    /**
     * @Route("/user", name="user_post", methods={"POST"})
     */
    public function create(Request $request, SerializerInterface $serializer, UserPasswordEncoderInterface $encoder, ValidatorInterface $validator)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $user = $serializer->deserialize($request->getContent(), User::class, 'json');
        $password = $user->getPassword();

        if ($password) {
            $user->setPassword($encoder->encodePassword($user, $password));
        }

        $errors = $validator->validate($user);

        if (count($errors) > 0) {
            return $this->json($errors, 400);
        }

        $errors = $validator->validate($user->getUserSheet());

        if (count($errors) > 0) {
            return $this->json($errors, 400);
        }

        $entityManager->persist($user);
        $entityManager->flush();

        return $this->json($user, 200, [], ['groups' => 'user:read']);
    }
}
