using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EnemyWeapon1 : MonoBehaviour
{
    // 
    [SerializeField] private float rotateSpeed;
    public bool isRotating = true;

    private Transform target;
    [SerializeField] private float moveSpeed;
    public GameObject destroyEffect, attackEffect;

    private float lifeTimer;
    [SerializeField] private float maxLife = 2.0f;


    // Start is called before the first frame update
    void Start()
    {
        target = GameObject.FindGameObjectWithTag("Main Character").GetComponent<Transform>();
    }

    // Update is called once per frame
    void Update()
    {
        SelfRotation();
        transform.position = Vector2.MoveTowards(transform.position, target.position, moveSpeed * Time.deltaTime);

        lifeTimer += Time.deltaTime;
        if(lifeTimer >= maxLife)
        {
            Instantiate(destroyEffect, transform.position, Quaternion.identity);
            Destroy(gameObject);
        }
    }

    private void SelfRotation()
    {
        if(isRotating)//STEP 02
        {
            transform.Rotate(0, 0, rotateSpeed * Time.deltaTime);//STEP 01 Weapon Rotation
        }
        else
        {
            transform.Rotate(0, 0, 0);
        }
    }

    private void OnTriggerEnter2D(Collider2D other)
    {
        if(other.gameObject.tag == "Main Character")
        {
            other.GetComponentInChildren<HealthBar>().hp -= 35;
            //Instantiate(attackEffect, transform.position, Quaternion.identity);
            Destroy(gameObject);
        }
    }
}
