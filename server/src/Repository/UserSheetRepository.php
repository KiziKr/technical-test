<?php

namespace App\Repository;

use App\Entity\UserSheet;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method UserSheet|null find($id, $lockMode = null, $lockVersion = null)
 * @method UserSheet|null findOneBy(array $criteria, array $orderBy = null)
 * @method UserSheet[]    findAll()
 * @method UserSheet[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserSheetRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UserSheet::class);
    }

    public function findOneByIdJoinedToUserSheet($id)
    {
        $entityManager = $this->getEntityManager();

        $query = $entityManager->createQuery(
            'SELECT p, c
            FROM App\Entity\UserSheet p
            INNER JOIN p.user c
            WHERE p.id = :id'
        )->setParameter('id', $id);

        return $query->getOneOrNullResult();
    }
}
